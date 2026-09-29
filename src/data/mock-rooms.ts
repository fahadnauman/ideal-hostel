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

/* ─── Sample Guests ──────────────────────────────────────── */

const tenants: Record<string, Tenant> = {
  g1: {
    id: id(),
    bedId: "",
    name: "Marco Rossi",
    phone: "+39 347 112 3456",
    email: "marco.rossi@gmail.com",
    checkInDate: "2026-09-01",
    leaseEndDate: "2026-10-01",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 1,
    paymentStatus: "PAID",
    emergencyContactName: "Lucia Rossi",
    emergencyContactRelation: "Sister",
    emergencyContactPhone: "+39 347 999 0011",
  },
  g2: {
    id: id(),
    bedId: "",
    name: "Aiko Tanaka",
    phone: "+81 90 1234 5678",
    email: "aiko.t@icloud.com",
    checkInDate: "2026-08-15",
    leaseEndDate: "2026-11-15",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 15,
    paymentStatus: "PAID",
    emergencyContactName: "Kenji Tanaka",
    emergencyContactRelation: "Father",
    emergencyContactPhone: "+81 90 9999 8888",
  },
  g3: {
    id: id(),
    bedId: "",
    name: "Sofia Kovács",
    phone: "+36 30 555 7890",
    email: "sofia.k@outlook.com",
    checkInDate: "2026-09-10",
    leaseEndDate: "2026-10-10",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 10,
    paymentStatus: "OVERDUE",
    emergencyContactName: "Anna Kovács",
    emergencyContactRelation: "Mother",
    emergencyContactPhone: "+36 30 111 2222",
  },
  g4: {
    id: id(),
    bedId: "",
    name: "James O'Brien",
    phone: "+353 87 234 5678",
    email: "jamesobrien@gmail.com",
    checkInDate: "2026-09-05",
    leaseEndDate: "2026-09-30",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 5,
    paymentStatus: "PAID",
    emergencyContactName: "Mary O'Brien",
    emergencyContactRelation: "Mother",
    emergencyContactPhone: "+353 87 999 7777",
  },
  g5: {
    id: id(),
    bedId: "",
    name: "Yara Al-Hassan",
    phone: "+966 50 123 4567",
    email: "yara.alhassan@yahoo.com",
    checkInDate: "2026-07-01",
    leaseEndDate: "2026-12-31",
    advanceDeposit: 5000,
    monthlyRent: 7500,
    rentDueDate: 1,
    paymentStatus: "PAID",
    emergencyContactName: "Hassan Al-Hassan",
    emergencyContactRelation: "Father",
    emergencyContactPhone: "+966 50 999 0000",
  },
  g6: {
    id: id(),
    bedId: "",
    name: "Lena Müller",
    phone: "+49 151 2345 6789",
    email: "lena.mueller@web.de",
    checkInDate: "2026-08-01",
    leaseEndDate: "2027-01-31",
    advanceDeposit: 5000,
    monthlyRent: 7500,
    rentDueDate: 1,
    paymentStatus: "UNPAID",
    emergencyContactName: "Klaus Müller",
    emergencyContactRelation: "Father",
    emergencyContactPhone: "+49 151 9999 8888",
  },
  g7: {
    id: id(),
    bedId: "",
    name: "Carlos Vega",
    phone: "+52 55 1234 5678",
    email: "carlos.vega@gmail.com",
    checkInDate: "2026-09-15",
    leaseEndDate: "2026-10-15",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 15,
    paymentStatus: "PARTIAL",
    emergencyContactName: "Maria Vega",
    emergencyContactRelation: "Mother",
    emergencyContactPhone: "+52 55 9999 0000",
  },
  g8: {
    id: id(),
    bedId: "",
    name: "Priya Krishnan",
    phone: "+91 98765 11223",
    email: "priya.k@icloud.com",
    checkInDate: "2026-06-01",
    leaseEndDate: "2026-12-01",
    advanceDeposit: 4500,
    monthlyRent: 6000,
    rentDueDate: 1,
    paymentStatus: "PAID",
    emergencyContactName: "Suresh Krishnan",
    emergencyContactRelation: "Father",
    emergencyContactPhone: "+91 98765 99001",
  },
};

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

/* ─── Room builder ───────────────────────────────────────── */

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

const PROPERTY_ID = "prop-ideal-hostel-001";

export const mockFloors: Floor[] = [
  { id: "floor-g", propertyId: PROPERTY_ID, floorNumber: 0, name: "Ground Floor — Dorms" },
  { id: "floor-1", propertyId: PROPERTY_ID, floorNumber: 1, name: "First Floor — Private" },
  { id: "floor-2", propertyId: PROPERTY_ID, floorNumber: 2, name: "Second Floor — Doubles" },
];

export const mockRoomsByFloor: Record<string, Room[]> = {
  /* Ground floor: 4 dorm rooms × 6 beds = 24 beds */
  "floor-g": [
    room("floor-g", "D01", "QUAD", [
      [1, "OCCUPIED", "g1"],
      [2, "OCCUPIED", "g2"],
      [3, "DUE", "g3"],
      [4, "OCCUPIED", "g4"],
      [5, "AVAILABLE"],
      [6, "AVAILABLE"],
    ]),
    room("floor-g", "D02", "QUAD", [
      [1, "OCCUPIED", "g7"],
      [2, "AVAILABLE"],
      [3, "AVAILABLE"],
      [4, "AVAILABLE"],
      [5, "AVAILABLE"],
      [6, "AVAILABLE"],
    ]),
    room("floor-g", "D03", "QUAD", [
      [1, "AVAILABLE"],
      [2, "AVAILABLE"],
      [3, "AVAILABLE"],
      [4, "AVAILABLE"],
      [5, "AVAILABLE"],
      [6, "AVAILABLE"],
    ]),
    room("floor-g", "D04", "QUAD", [
      [1, "OCCUPIED", "g8"],
      [2, "AVAILABLE"],
      [3, "AVAILABLE"],
      [4, "AVAILABLE"],
      [5, "AVAILABLE"],
      [6, "AVAILABLE"],
    ]),
  ],
  /* First floor: 6 private singles = 6 beds */
  "floor-1": [
    room("floor-1", "P01", "SINGLE", [[1, "OCCUPIED", "g5"]]),
    room("floor-1", "P02", "SINGLE", [[1, "OCCUPIED", "g6"]]),
    room("floor-1", "P03", "SINGLE", [[1, "AVAILABLE"]]),
    room("floor-1", "P04", "SINGLE", [[1, "AVAILABLE"]]),
    room("floor-1", "P05", "SINGLE", [[1, "AVAILABLE"]]),
    room("floor-1", "P06", "SINGLE", [[1, "ENDING_SOON", "g4"]]),
  ],
  /* Second floor: 4 double rooms = 8 beds */
  "floor-2": [
    room("floor-2", "T01", "DOUBLE", [
      [1, "OCCUPIED", "g1"],
      [2, "OCCUPIED", "g2"],
    ]),
    room("floor-2", "T02", "DOUBLE", [
      [1, "AVAILABLE"],
      [2, "ENDING_SOON", "g3"],
    ]),
    room("floor-2", "T03", "DOUBLE", [
      [1, "OCCUPIED", "g8"],
      [2, "AVAILABLE"],
    ]),
    room("floor-2", "T04", "DOUBLE", [
      [1, "AVAILABLE"],
      [2, "AVAILABLE"],
    ]),
  ],
};

/* ─── Payment History ────────────────────────────────────── */

export const mockPaymentHistory: PaymentRecord[] = [
  { id: id(), tenantId: "mock-1", tenantName: "Marco Rossi", roomNumber: "D01", bedNumber: 1, month: "Sep 2026", amount: 4500, status: "PAID", paidOn: "2026-09-01", paymentMode: "UPI" },
  { id: id(), tenantId: "mock-2", tenantName: "Aiko Tanaka", roomNumber: "D01", bedNumber: 2, month: "Sep 2026", amount: 4500, status: "PAID", paidOn: "2026-09-15", paymentMode: "BANK_TRANSFER" },
  { id: id(), tenantId: "mock-3", tenantName: "Sofia Kovács", roomNumber: "D01", bedNumber: 3, month: "Sep 2026", amount: 4500, status: "OVERDUE", paidOn: null, paymentMode: null },
  { id: id(), tenantId: "mock-4", tenantName: "James O'Brien", roomNumber: "D01", bedNumber: 4, month: "Sep 2026", amount: 4500, status: "PAID", paidOn: "2026-09-05", paymentMode: "CASH" },
  { id: id(), tenantId: "mock-5", tenantName: "Yara Al-Hassan", roomNumber: "P01", bedNumber: 1, month: "Sep 2026", amount: 7500, status: "PAID", paidOn: "2026-09-01", paymentMode: "UPI" },
  { id: id(), tenantId: "mock-6", tenantName: "Lena Müller", roomNumber: "P02", bedNumber: 1, month: "Sep 2026", amount: 7500, status: "UNPAID", paidOn: null, paymentMode: null },
];

/* ─── Meal Logs ──────────────────────────────────────────── */

const todayStr = new Date().toISOString().split("T")[0];

export const mockMealRecords: import("@/types").MealRecord[] = [
  { id: id(), date: todayStr, tenantId: "mock-1", tenantName: "Marco Rossi", roomNumber: "D01", mealType: "BREAKFAST", status: "OPTED_IN" },
  { id: id(), date: todayStr, tenantId: "mock-1", tenantName: "Marco Rossi", roomNumber: "D01", mealType: "LUNCH", status: "SKIPPED" },
  { id: id(), date: todayStr, tenantId: "mock-1", tenantName: "Marco Rossi", roomNumber: "D01", mealType: "DINNER", status: "OPTED_IN" },
  { id: id(), date: todayStr, tenantId: "mock-2", tenantName: "Aiko Tanaka", roomNumber: "D01", mealType: "BREAKFAST", status: "OPTED_IN" },
  { id: id(), date: todayStr, tenantId: "mock-2", tenantName: "Aiko Tanaka", roomNumber: "D01", mealType: "LUNCH", status: "OPTED_IN" },
  { id: id(), date: todayStr, tenantId: "mock-2", tenantName: "Aiko Tanaka", roomNumber: "D01", mealType: "DINNER", status: "OPTED_IN" },
  { id: id(), date: todayStr, tenantId: "mock-5", tenantName: "Yara Al-Hassan", roomNumber: "P01", mealType: "BREAKFAST", status: "OPTED_IN" },
  { id: id(), date: todayStr, tenantId: "mock-5", tenantName: "Yara Al-Hassan", roomNumber: "P01", mealType: "LUNCH", status: "OPTED_IN" },
  { id: id(), date: todayStr, tenantId: "mock-5", tenantName: "Yara Al-Hassan", roomNumber: "P01", mealType: "DINNER", status: "SKIPPED" },
];
