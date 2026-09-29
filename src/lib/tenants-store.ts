import type { Tenant, PaymentRecord, PaymentSubmission } from "@/types";

/* ─── Initial Seed Guests ────────────────────────────────────── */

const initialSeedTenants: Tenant[] = [
  {
    id: "guest-d01-1",
    bedId: "bed-d01-1",
    name: "Marco Rossi",
    phone: "+39 347 112 3456",
    email: "marco.rossi@gmail.com",
    roomNumber: "D01",
    bedNumber: 1,
    floorName: "Ground Floor — Dorms",
    checkInDate: "2026-09-01",
    leaseEndDate: "2026-10-01",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 1,
    paymentStatus: "PAID",
    emergencyContactName: "Lucia Rossi",
    emergencyContactRelation: "Sister",
    emergencyContactPhone: "+39 347 999 0011",
    status: "ACTIVE",
  },
  {
    id: "guest-d01-2",
    bedId: "bed-d01-2",
    name: "Aiko Tanaka",
    phone: "+81 90 1234 5678",
    email: "aiko.t@icloud.com",
    roomNumber: "D01",
    bedNumber: 2,
    floorName: "Ground Floor — Dorms",
    checkInDate: "2026-08-15",
    leaseEndDate: "2026-11-15",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 15,
    paymentStatus: "PAID",
    emergencyContactName: "Kenji Tanaka",
    emergencyContactRelation: "Father",
    emergencyContactPhone: "+81 90 9999 8888",
    status: "ACTIVE",
  },
  {
    id: "guest-d01-3",
    bedId: "bed-d01-3",
    name: "Sofia Kovács",
    phone: "+36 30 555 7890",
    email: "sofia.k@outlook.com",
    roomNumber: "D01",
    bedNumber: 3,
    floorName: "Ground Floor — Dorms",
    checkInDate: "2026-09-10",
    leaseEndDate: "2026-10-10",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 10,
    paymentStatus: "OVERDUE",
    emergencyContactName: "Anna Kovács",
    emergencyContactRelation: "Mother",
    emergencyContactPhone: "+36 30 111 2222",
    status: "ACTIVE",
  },
  {
    id: "guest-d01-4",
    bedId: "bed-d01-4",
    name: "James O'Brien",
    phone: "+353 87 234 5678",
    email: "jamesobrien@gmail.com",
    roomNumber: "D01",
    bedNumber: 4,
    floorName: "Ground Floor — Dorms",
    checkInDate: "2026-09-05",
    leaseEndDate: "2026-09-30",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 5,
    paymentStatus: "PAID",
    emergencyContactName: "Mary O'Brien",
    emergencyContactRelation: "Mother",
    emergencyContactPhone: "+353 87 999 7777",
    status: "ACTIVE",
  },
  {
    id: "guest-d02-1",
    bedId: "bed-d02-1",
    name: "Carlos Vega",
    phone: "+52 55 1234 5678",
    email: "carlos.vega@gmail.com",
    roomNumber: "D02",
    bedNumber: 1,
    floorName: "Ground Floor — Dorms",
    checkInDate: "2026-09-15",
    leaseEndDate: "2026-10-15",
    advanceDeposit: 3000,
    monthlyRent: 4500,
    rentDueDate: 15,
    paymentStatus: "PARTIAL",
    emergencyContactName: "Maria Vega",
    emergencyContactRelation: "Mother",
    emergencyContactPhone: "+52 55 9999 0000",
    status: "ACTIVE",
  },
  {
    id: "guest-d04-1",
    bedId: "bed-d04-1",
    name: "Priya Krishnan",
    phone: "+91 98765 11223",
    email: "priya.k@icloud.com",
    roomNumber: "D04",
    bedNumber: 1,
    floorName: "Ground Floor — Dorms",
    checkInDate: "2026-06-01",
    leaseEndDate: "2026-12-01",
    advanceDeposit: 4500,
    monthlyRent: 4500,
    rentDueDate: 1,
    paymentStatus: "PAID",
    emergencyContactName: "Suresh Krishnan",
    emergencyContactRelation: "Father",
    emergencyContactPhone: "+91 98765 99001",
    status: "ACTIVE",
  },
  {
    id: "guest-p01-1",
    bedId: "bed-p01-1",
    name: "Yara Al-Hassan",
    phone: "+966 50 123 4567",
    email: "yara.alhassan@yahoo.com",
    roomNumber: "P01",
    bedNumber: 1,
    floorName: "First Floor — Private",
    checkInDate: "2026-07-01",
    leaseEndDate: "2026-12-31",
    advanceDeposit: 5000,
    monthlyRent: 7500,
    rentDueDate: 1,
    paymentStatus: "PAID",
    emergencyContactName: "Hassan Al-Hassan",
    emergencyContactRelation: "Father",
    emergencyContactPhone: "+966 50 999 0000",
    status: "ACTIVE",
  },
  {
    id: "guest-p02-1",
    bedId: "bed-p02-1",
    name: "Lena Müller",
    phone: "+49 151 2345 6789",
    email: "lena.mueller@web.de",
    roomNumber: "P02",
    bedNumber: 1,
    floorName: "First Floor — Private",
    checkInDate: "2026-08-01",
    leaseEndDate: "2027-01-31",
    advanceDeposit: 5000,
    monthlyRent: 7500,
    rentDueDate: 1,
    paymentStatus: "UNPAID",
    emergencyContactName: "Klaus Müller",
    emergencyContactRelation: "Father",
    emergencyContactPhone: "+49 151 9999 8888",
    status: "ACTIVE",
  },
];

/* ─── Initial Seed Ledger ────────────────────────────────────── */

const initialSeedLedger: PaymentRecord[] = [
  {
    id: "pay-d01-1-sep",
    tenantId: "guest-d01-1",
    tenantName: "Marco Rossi",
    roomNumber: "D01",
    bedNumber: 1,
    month: "Sep 2026",
    amount: 4500,
    status: "PAID",
    paidOn: "2026-09-01",
    paymentMode: "UPI",
    transactionRef: "UPI/IH-001-SEP26",
  },
  {
    id: "pay-d01-2-sep",
    tenantId: "guest-d01-2",
    tenantName: "Aiko Tanaka",
    roomNumber: "D01",
    bedNumber: 2,
    month: "Sep 2026",
    amount: 4500,
    status: "PAID",
    paidOn: "2026-09-15",
    paymentMode: "BANK_TRANSFER",
    transactionRef: "NEFT/IH-002-SEP26",
  },
  {
    id: "pay-d01-3-sep",
    tenantId: "guest-d01-3",
    tenantName: "Sofia Kovács",
    roomNumber: "D01",
    bedNumber: 3,
    month: "Sep 2026",
    amount: 4500,
    status: "OVERDUE",
    paidOn: null,
    paymentMode: null,
    transactionRef: null,
  },
  {
    id: "pay-d01-4-sep",
    tenantId: "guest-d01-4",
    tenantName: "James O'Brien",
    roomNumber: "D01",
    bedNumber: 4,
    month: "Sep 2026",
    amount: 4500,
    status: "PAID",
    paidOn: "2026-09-05",
    paymentMode: "CASH",
    transactionRef: "REC#IH-0041",
  },
  {
    id: "pay-d02-1-sep",
    tenantId: "guest-d02-1",
    tenantName: "Carlos Vega",
    roomNumber: "D02",
    bedNumber: 1,
    month: "Sep 2026",
    amount: 2500,
    status: "PARTIAL",
    paidOn: "2026-09-15",
    paymentMode: "UPI",
    transactionRef: "UPI/IH-005-SEP26",
  },
  {
    id: "pay-d04-1-sep",
    tenantId: "guest-d04-1",
    tenantName: "Priya Krishnan",
    roomNumber: "D04",
    bedNumber: 1,
    month: "Sep 2026",
    amount: 4500,
    status: "PAID",
    paidOn: "2026-09-01",
    paymentMode: "UPI",
    transactionRef: "UPI/IH-006-SEP26",
  },
  {
    id: "pay-p01-1-sep",
    tenantId: "guest-p01-1",
    tenantName: "Yara Al-Hassan",
    roomNumber: "P01",
    bedNumber: 1,
    month: "Sep 2026",
    amount: 7500,
    status: "PAID",
    paidOn: "2026-09-01",
    paymentMode: "BANK_TRANSFER",
    transactionRef: "IMPS/IH-007-SEP26",
  },
  {
    id: "pay-p02-1-sep",
    tenantId: "guest-p02-1",
    tenantName: "Lena Müller",
    roomNumber: "P02",
    bedNumber: 1,
    month: "Sep 2026",
    amount: 7500,
    status: "UNPAID",
    paidOn: null,
    paymentMode: null,
    transactionRef: null,
  },
];

/* ─── Initial Seed Payment Submissions ───────────────────────── */

const initialSeedSubmissions: PaymentSubmission[] = [
  {
    id: "sub-ih-9001",
    tenantId: "guest-d01-1",
    tenantName: "Marco Rossi",
    roomNumber: "D01",
    bedNumber: 1,
    amount: 4500,
    transactionId: "UPI/IH-001-SEP26-VERIFY",
    paymentMode: "GPAY_UPI",
    notes: "September rent paid via Google Pay",
    status: "PENDING_VERIFICATION",
    submittedAt: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
  },
];

/* ─── Global State ───────────────────────────────────────────── */

declare global {
  var __pghq_tenants: Tenant[] | undefined;
  var __pghq_ledger: PaymentRecord[] | undefined;
  var __pghq_payment_submissions: PaymentSubmission[] | undefined;
}

if (!globalThis.__pghq_tenants) {
  globalThis.__pghq_tenants = [...initialSeedTenants];
}

if (!globalThis.__pghq_ledger) {
  globalThis.__pghq_ledger = [...initialSeedLedger];
}

if (!globalThis.__pghq_payment_submissions) {
  globalThis.__pghq_payment_submissions = [...initialSeedSubmissions];
}

/* ─── Query Functions ────────────────────────────────────────── */

export function getAllTenants(): Tenant[] {
  return [...(globalThis.__pghq_tenants ?? [])];
}

export function getTenantById(id: string): Tenant | undefined {
  return (globalThis.__pghq_tenants ?? []).find((t) => t.id === id);
}

export function getTenantsByRoom(roomNumber: string): Tenant[] {
  return (globalThis.__pghq_tenants ?? []).filter(
    (t) => t.roomNumber?.toUpperCase() === roomNumber.toUpperCase()
  );
}

export function updateTenant(id: string, updates: Partial<Tenant>): Tenant | null {
  if (!globalThis.__pghq_tenants) return null;
  const index = globalThis.__pghq_tenants.findIndex((t) => t.id === id);
  if (index === -1) return null;

  const updated: Tenant = {
    ...globalThis.__pghq_tenants[index],
    ...updates,
  };
  globalThis.__pghq_tenants[index] = updated;
  return updated;
}

export function getTenantPaymentHistory(tenantId: string): PaymentRecord[] {
  return (globalThis.__pghq_ledger ?? [])
    .filter((p) => p.tenantId === tenantId)
    .sort((a, b) => b.month.localeCompare(a.month));
}

export function getAllLedgerRecords(): PaymentRecord[] {
  return [...(globalThis.__pghq_ledger ?? [])];
}

export function addPaymentRecord(record: Omit<PaymentRecord, "id">): PaymentRecord {
  if (!globalThis.__pghq_ledger) globalThis.__pghq_ledger = [];
  const newRecord: PaymentRecord = {
    ...record,
    id: `pay-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
  };
  globalThis.__pghq_ledger.unshift(newRecord);

  if (record.status === "PAID" && record.tenantId) {
    updateTenant(record.tenantId, { paymentStatus: "PAID" });
  }

  return newRecord;
}

export function createPaymentSubmission(
  submission: Omit<PaymentSubmission, "id" | "submittedAt" | "status">
): PaymentSubmission {
  if (!globalThis.__pghq_payment_submissions) {
    globalThis.__pghq_payment_submissions = [];
  }

  const newSub: PaymentSubmission = {
    ...submission,
    id: `SUB-${Date.now()}`,
    status: "PENDING_VERIFICATION",
    submittedAt: new Date().toISOString(),
  };

  globalThis.__pghq_payment_submissions.unshift(newSub);
  return newSub;
}

export function getAllPaymentSubmissions(): PaymentSubmission[] {
  return [...(globalThis.__pghq_payment_submissions ?? [])];
}
