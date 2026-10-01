import type {
  Floor,
  Room,
  Bed,
  Tenant,
  PaymentRecord,
} from "@/types";

/* ─── Helpers ────────────────────────────────────────────── */

let _id = 0;
const id = () => `mock-${++_id}`;

/* ─── Tenants ────────────────────────────────────────────── */

import { getAllTenants } from "@/lib/tenants-store";
const tenants: Record<string, Tenant> = {};
const seed = getAllTenants();
seed.forEach(t => tenants[t.id] = t);

/* ─── Bed builder ────────────────────────────────────────── */

function bed(
  roomId: string,
  bedNumber: number,
  status: Bed["status"],
  tenantKey?: string
): Bed {
  const b: Bed = {
    id: id(),
    roomId,
    bedNumber,
    status,
    tenant: tenantKey ? { ...tenants[tenantKey] } : null,
  };
  if (b.tenant) b.tenant.bedId = b.id;
  return b;
}

/* ─── Rooms ──────────────────────────────────────────────── */

function room(
  floorId: string,
  roomNumber: string,
  roomType: Room["roomType"],
  beds: [number, Bed["status"], string?][]
): Room {
  const roomId = id();
  return {
    id: roomId,
    floorId,
    roomNumber,
    roomType,
    beds: beds.map(([bedNum, status, tenantKey]) =>
      bed(roomId, bedNum, status, tenantKey)
    ),
  };
}

/* ─── Floor Data ─────────────────────────────────────────── */

const PROPERTY_ID = "prop-ideal-001";

export const mockFloors: Floor[] = [
  { id: "floor-b", propertyId: PROPERTY_ID, floorNumber: 0, name: "Basement Floor" },
  { id: "floor-1", propertyId: PROPERTY_ID, floorNumber: 1, name: "First Floor" },
  { id: "floor-2", propertyId: PROPERTY_ID, floorNumber: 2, name: "Second Floor" },
];

declare global {
  var __pghq_rooms: Record<string, Room[]> | undefined;
}

if (!globalThis.__pghq_rooms) {
  globalThis.__pghq_rooms = {
  "floor-b": [
    room("floor-b", "B01", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-13"], [2, "OCCUPIED", "ten-1790825655719-14"]]),
    room("floor-b", "B02", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-15"], [2, "OCCUPIED", "ten-1790825655719-16"]]),
    room("floor-b", "B03", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-17"], [2, "OCCUPIED", "ten-1790825655719-18"]]),
    room("floor-b", "B04", "SINGLE", [[1, "OCCUPIED", "ten-1790825655719-19"]]),
    room("floor-b", "B05", "TRIPLE", [[1, "OCCUPIED", "ten-1790825655719-20"], [2, "OCCUPIED", "ten-1790825655719-22"], [3, "AVAILABLE"]]),
  ],
  "floor-1": [
    room("floor-1", "101", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-21"], [2, "OCCUPIED", "ten-1790825655719-23"]]),
    room("floor-1", "102", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-30"], [2, "AVAILABLE"]]),
    room("floor-1", "103", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-10"], [2, "OCCUPIED", "ten-1790825655719-31"]]),
    room("floor-1", "104", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-11"], [2, "OCCUPIED", "ten-1790825655719-32"]]),
    room("floor-1", "105", "SINGLE", [[1, "OCCUPIED", "ten-1790825655719-33"]]),
  ],
  "floor-2": [
    room("floor-2", "201", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-12"], [2, "OCCUPIED", "ten-1790825655719-28"]]),
    room("floor-2", "202", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-9"], [2, "OCCUPIED", "ten-1790825655719-29"]]),
    room("floor-2", "203", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-27"], [2, "OCCUPIED", "ten-1790825655719-34"]]),
    room("floor-2", "204", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "205", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-3"], [2, "OCCUPIED", "ten-1790825655719-4"]]),
    room("floor-2", "206", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-5"], [2, "OCCUPIED", "ten-1790825655719-6"]]),
    room("floor-2", "207", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-7"], [2, "OCCUPIED", "ten-1790825655719-8"]]),
    room("floor-2", "208", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655713-0"], [2, "OCCUPIED", "ten-1790825655719-26"]]),
    room("floor-2", "209", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-24"], [2, "OCCUPIED", "ten-1790825655719-25"]]),
    room("floor-2", "210", "DOUBLE", [[1, "OCCUPIED", "ten-1790825655719-1"], [2, "OCCUPIED", "ten-1790825655719-2"]]),
  ],
  };
}

export const mockRoomsByFloor = globalThis.__pghq_rooms;

export const mockPaymentHistory: PaymentRecord[] = [];
