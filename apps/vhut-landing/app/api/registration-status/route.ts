import { NextResponse } from "next/server";

const RACERESULT_CONFIG_URL =
  "https://my.raceresult.com/358397/RRRegStart/data/config?lang=nb&test=";

function soldOutFromConfig(data: unknown): Record<number, boolean> {
  const result: Record<number, boolean> = {};
  try {
    const config = (data as { RegistrationConfig?: { Registrations?: { ShowContests?: boolean; Contests?: { Name: string; SlotsLeft: number }[] }[] } })
      ?.RegistrationConfig;
    const mainReg = config?.Registrations?.find((r) => r.ShowContests && r.Contests?.length);
    const contests = mainReg?.Contests ?? [];
    for (const c of contests) {
      const match = /^(\d+)\s*km$/i.exec(c.Name?.trim() ?? "");
      if (match && c.SlotsLeft >= 0) {
        result[parseInt(match[1], 10)] = c.SlotsLeft === 0;
      }
    }
  } catch {
    // fallback: empty map
  }
  return result;
}

export async function GET() {
  try {
    const res = await fetch(RACERESULT_CONFIG_URL, {
      next: { revalidate: 300 }, // cache 5 min
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      return NextResponse.json({ soldOut: {} }, { status: 200 });
    }
    const data = await res.json();
    const soldOut = soldOutFromConfig(data);
    return NextResponse.json({ soldOut });
  } catch {
    return NextResponse.json({ soldOut: {} }, { status: 200 });
  }
}
