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

const tenants: Record<string, Tenant> = {};

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
    room("floor-b", "R01", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-b", "R02", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-b", "R03", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-b", "R04", "SINGLE", [[1, "AVAILABLE"]]),
    room("floor-b", "R05", "TRIPLE", [[1, "AVAILABLE"], [2, "AVAILABLE"], [3, "AVAILABLE"]]),
  ],
  "floor-1": [
    room("floor-1", "R06", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-1", "R07", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-1", "R08", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-1", "R09", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-1", "R10", "SINGLE", [[1, "AVAILABLE"]]),
  ],
  "floor-2": [
    room("floor-2", "R11", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R12", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R13", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R14", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R15", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R16", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R17", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R18", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R19", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
    room("floor-2", "R20", "DOUBLE", [[1, "AVAILABLE"], [2, "AVAILABLE"]]),
  ],
  };
}

export const mockRoomsByFloor = globalThis.__pghq_rooms;

export const mockPaymentHistory: PaymentRecord[] = [];
