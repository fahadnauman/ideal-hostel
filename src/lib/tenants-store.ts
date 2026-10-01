import type { Tenant, PaymentRecord, PaymentSubmission } from "@/types";

/* ─── Initial Seed Tenants ───────────────────────────────────── */

const initialSeedTenants: Tenant[] = [
  {
    "id": "ten-1790825655713-0",
    "bedId": "WILL_BE_REPLACED",
    "name": "HAISHAM MUHAMMED N",
    "phone": "8089791560",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "MUHAMMED N",
    "emergencyContactPhone": "8086156030",
    "roomNumber": "208",
    "paymentMethod": "UPI",
    "courseName": "B.Tech EC"
  },
  {
    "id": "ten-1790825655719-1",
    "bedId": "WILL_BE_REPLACED",
    "name": "MOHAMMED ZAYAN T",
    "phone": "9061952940",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Shamsiya P M",
    "emergencyContactPhone": "8606262940",
    "roomNumber": "210",
    "paymentMethod": "UPI",
    "courseName": "ECE"
  },
  {
    "id": "ten-1790825655719-2",
    "bedId": "WILL_BE_REPLACED",
    "name": "AMAN HANEES MOHAMMED",
    "phone": "7558966320",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "HANEES MOHAMMED",
    "emergencyContactPhone": "9539466320",
    "roomNumber": "210",
    "paymentMethod": "UPI",
    "courseName": "BTECH INDUSTRIAL ENG"
  },
  {
    "id": "ten-1790825655719-3",
    "bedId": "WILL_BE_REPLACED",
    "name": "FUAD K",
    "phone": "9562426903",
    "email": "",
    "checkInDate": "2026-07-23T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Hilaludheen K",
    "emergencyContactPhone": "9745150224",
    "roomNumber": "205",
    "paymentMethod": "UPI",
    "courseName": "Electrical & Electronics"
  },
  {
    "id": "ten-1790825655719-4",
    "bedId": "WILL_BE_REPLACED",
    "name": "Muhammad Rayyan",
    "phone": "6282931593",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Shafeek",
    "emergencyContactPhone": "6282623863",
    "roomNumber": "205",
    "paymentMethod": "UPI",
    "courseName": "EC"
  },
  {
    "id": "ten-1790825655719-5",
    "bedId": "WILL_BE_REPLACED",
    "name": "ALTHAF MUHAMMAD S",
    "phone": "9495626682",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Ansiya A",
    "emergencyContactPhone": "9447179668",
    "roomNumber": "206",
    "paymentMethod": "UPI",
    "courseName": "ECE"
  },
  {
    "id": "ten-1790825655719-6",
    "bedId": "WILL_BE_REPLACED",
    "name": "AMEEN IQBAL A B",
    "phone": "9656266972",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "IQBAL ALIAMBATH",
    "emergencyContactPhone": "9349896200",
    "roomNumber": "206",
    "paymentMethod": "UPI",
    "courseName": "EC"
  },
  {
    "id": "ten-1790825655719-7",
    "bedId": "WILL_BE_REPLACED",
    "name": "Anjoe Mejo",
    "phone": "9995802281",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Mejo MF",
    "emergencyContactPhone": "9995802281",
    "roomNumber": "207",
    "paymentMethod": "UPI",
    "courseName": "EL"
  },
  {
    "id": "ten-1790825655719-8",
    "bedId": "WILL_BE_REPLACED",
    "name": "AASHIK MOHAMMED",
    "phone": "8891695217",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "NAVAZ PK",
    "emergencyContactPhone": "7356995217",
    "roomNumber": "207",
    "paymentMethod": "UPI",
    "courseName": "ECE"
  },
  {
    "id": "ten-1790825655719-9",
    "bedId": "WILL_BE_REPLACED",
    "name": "Ridwan A K",
    "phone": "8606061480",
    "email": "",
    "checkInDate": "2026-07-24T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Mohamad A K",
    "emergencyContactPhone": "9895231212",
    "roomNumber": "202",
    "paymentMethod": "UPI",
    "courseName": "ECE"
  },
  {
    "id": "ten-1790825655719-10",
    "bedId": "WILL_BE_REPLACED",
    "name": "RON EMMANUEL JOSHY",
    "phone": "9746554213",
    "email": "",
    "checkInDate": "2026-08-13T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "JOSHY MANUEL",
    "emergencyContactPhone": "9447914213",
    "roomNumber": "103",
    "paymentMethod": "UPI",
    "courseName": "Mechanical Engineering"
  },
  {
    "id": "ten-1790825655719-11",
    "bedId": "WILL_BE_REPLACED",
    "name": "ADAM BIN ZAMEER",
    "phone": "8921498204",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Zameer K H",
    "emergencyContactPhone": "8921498204",
    "roomNumber": "104",
    "paymentMethod": "UPI",
    "courseName": "B.tech CE"
  },
  {
    "id": "ten-1790825655719-12",
    "bedId": "WILL_BE_REPLACED",
    "name": "Ahmed Sahil S",
    "phone": "8078148894",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Sherief Kutty M",
    "emergencyContactPhone": "9744130746",
    "roomNumber": "201",
    "paymentMethod": "UPI",
    "courseName": "EEE"
  },
  {
    "id": "ten-1790825655719-13",
    "bedId": "WILL_BE_REPLACED",
    "name": "Shiraz Aymen MK",
    "phone": "9118207433",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Naofal Babu MK",
    "emergencyContactPhone": "9539696608",
    "roomNumber": "B01",
    "paymentMethod": "CASH",
    "courseName": "B-Tech ECE"
  },
  {
    "id": "ten-1790825655719-14",
    "bedId": "WILL_BE_REPLACED",
    "name": "ABAD AHMED K",
    "phone": "7012469796",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "SHAMSUDHEEN K",
    "emergencyContactPhone": "9447350680",
    "roomNumber": "B01",
    "paymentMethod": "CASH",
    "courseName": "EL"
  },
  {
    "id": "ten-1790825655719-15",
    "bedId": "WILL_BE_REPLACED",
    "name": "Sivadath P.M",
    "phone": "7907241668",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Manoj P.V",
    "emergencyContactPhone": "9388695067",
    "roomNumber": "B02",
    "paymentMethod": "UPI",
    "courseName": "BTECH ELECTRICAL AND ELECTRONICS"
  },
  {
    "id": "ten-1790825655719-16",
    "bedId": "WILL_BE_REPLACED",
    "name": "Adarsh K.S",
    "phone": "7909221164",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 1000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "SUDHEESH KUMAR K A",
    "emergencyContactPhone": "8086265578",
    "roomNumber": "B02",
    "paymentMethod": "UPI",
    "courseName": "ECE"
  },
  {
    "id": "ten-1790825655719-17",
    "bedId": "WILL_BE_REPLACED",
    "name": "Fadhlu Rahman Nk",
    "phone": "7736267850",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Hamza Nk",
    "emergencyContactPhone": "9947635070",
    "roomNumber": "B02",
    "paymentMethod": "UPI",
    "courseName": "IE"
  },
  {
    "id": "ten-1790825655719-18",
    "bedId": "WILL_BE_REPLACED",
    "name": "Mohammed Rafid mp",
    "phone": "9778259117",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Muhammed Rafeeque mp",
    "emergencyContactPhone": "7736227585",
    "roomNumber": "B03",
    "paymentMethod": "CASH",
    "courseName": "Industrial (IE)"
  },
  {
    "id": "ten-1790825655719-19",
    "bedId": "WILL_BE_REPLACED",
    "name": "Sinan Saeed",
    "phone": "8089433415",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Saidalavi",
    "emergencyContactPhone": "9567703415",
    "roomNumber": "B03",
    "paymentMethod": "UPI",
    "courseName": "Industrial engneering"
  },
  {
    "id": "ten-1790825655719-20",
    "bedId": "WILL_BE_REPLACED",
    "name": "Ahsan Ameer C.K",
    "phone": "8281640093",
    "email": "",
    "checkInDate": "2026-08-10T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Muhammed Ameer C.K",
    "emergencyContactPhone": "9497647506",
    "roomNumber": "B04",
    "paymentMethod": "UPI",
    "courseName": "B.Tech, Civil Engineering"
  },
  {
    "id": "ten-1790825655719-21",
    "bedId": "WILL_BE_REPLACED",
    "name": "Muhammed Ameen P",
    "phone": "9074159429",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 4000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Abdul Jaleel P",
    "emergencyContactPhone": "974477488",
    "roomNumber": "101",
    "paymentMethod": "UPI",
    "courseName": "Electronics & Communication engineering"
  },
  {
    "id": "ten-1790825655719-22",
    "bedId": "WILL_BE_REPLACED",
    "name": "Saday Jayaraj R",
    "phone": "9946781729",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Jayaraj K",
    "emergencyContactPhone": "9495581191",
    "roomNumber": "B05",
    "paymentMethod": "UPI",
    "courseName": "Computer Science & Engineering"
  },
  {
    "id": "ten-1790825655719-23",
    "bedId": "WILL_BE_REPLACED",
    "name": "Muhammed Vishan",
    "phone": "7306318623",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Sameera",
    "emergencyContactPhone": "9562193541",
    "roomNumber": "101",
    "paymentMethod": "UPI",
    "courseName": "EEE"
  },
  {
    "id": "ten-1790825655719-24",
    "bedId": "WILL_BE_REPLACED",
    "name": "Govind Siva A",
    "phone": "7306003914",
    "email": "",
    "checkInDate": "2026-08-13T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Aneesh Kumar S",
    "emergencyContactPhone": "9446121348",
    "roomNumber": "209",
    "paymentMethod": "UPI",
    "courseName": "B Tech - Industrial Engineering"
  },
  {
    "id": "ten-1790825655719-25",
    "bedId": "WILL_BE_REPLACED",
    "name": "ESHANKRISHNAN C.M",
    "phone": "7012792692",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "MANOJ CHANDRAN",
    "emergencyContactPhone": "9447530577",
    "roomNumber": "209",
    "paymentMethod": "UPI",
    "courseName": "EC"
  },
  {
    "id": "ten-1790825655719-26",
    "bedId": "WILL_BE_REPLACED",
    "name": "Adeeb Abdullah Noushad TV",
    "phone": "8593838006",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "NOUSHAD TV",
    "emergencyContactPhone": "8157854800",
    "roomNumber": "208",
    "paymentMethod": "UPI",
    "courseName": "ECE"
  },
  {
    "id": "ten-1790825655719-27",
    "bedId": "WILL_BE_REPLACED",
    "name": "MUHAMMAD HAMDHAN",
    "phone": "9037350284",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "HAFISNLYASIN",
    "emergencyContactPhone": "",
    "roomNumber": "203",
    "paymentMethod": "CASH",
    "courseName": "EEE"
  },
  {
    "id": "ten-1790825655719-28",
    "bedId": "WILL_BE_REPLACED",
    "name": "ABHINAND KRISHNA S A",
    "phone": "9207744999",
    "email": "",
    "checkInDate": "2026-07-16T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "ANAND ARAVIND",
    "emergencyContactPhone": "9447082277",
    "roomNumber": "201",
    "paymentMethod": "UPI",
    "courseName": "CIVIL DEPARTMENT"
  },
  {
    "id": "ten-1790825655719-29",
    "bedId": "WILL_BE_REPLACED",
    "name": "ESHAN AHMED",
    "phone": "9544788658",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Firoz Babu",
    "emergencyContactPhone": "9739498080",
    "roomNumber": "202",
    "paymentMethod": "UPI",
    "courseName": "BTech, AE&I"
  },
  {
    "id": "ten-1790825655719-30",
    "bedId": "WILL_BE_REPLACED",
    "name": "SREEHARI S",
    "phone": "8921527415",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Santhosh Kumar",
    "emergencyContactPhone": "9496328680",
    "roomNumber": "101",
    "paymentMethod": "UPI",
    "courseName": "EEE"
  },
  {
    "id": "ten-1790825655719-31",
    "bedId": "WILL_BE_REPLACED",
    "name": "Shakir Chalilakath",
    "phone": "9745705432",
    "email": "",
    "checkInDate": "2026-07-22T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "CA SAFEEQUE",
    "emergencyContactPhone": "9847619616",
    "roomNumber": "103",
    "paymentMethod": "UPI",
    "courseName": "ECE"
  },
  {
    "id": "ten-1790825655719-32",
    "bedId": "WILL_BE_REPLACED",
    "name": "AMAN MOHAMMED KK",
    "phone": "9961115385",
    "email": "",
    "checkInDate": "2026-07-21T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Shamsudheen kk",
    "emergencyContactPhone": "8943988885",
    "roomNumber": "103",
    "paymentMethod": "UPI",
    "courseName": "Applied Electronics"
  },
  {
    "id": "ten-1790825655719-33",
    "bedId": "WILL_BE_REPLACED",
    "name": "Swalah CP",
    "phone": "9846149078",
    "email": "",
    "checkInDate": "2026-07-22T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "Abdul Vahab CP",
    "emergencyContactPhone": "8547172070",
    "roomNumber": "104",
    "paymentMethod": "UPI",
    "courseName": "BTech CSE"
  },
  {
    "id": "ten-1790825655719-34",
    "bedId": "WILL_BE_REPLACED",
    "name": "NASIH USMAN",
    "phone": "9400758823",
    "email": "",
    "checkInDate": "2026-07-20T00:00:00.000Z",
    "leaseEndDate": null,
    "advanceDeposit": 5000,
    "monthlyRent": 5000,
    "rentDueDate": 1,
    "paymentStatus": "PAID",
    "emergencyContactName": "USMAN KU",
    "emergencyContactPhone": "9847190111",
    "roomNumber": "104",
    "paymentMethod": "UPI",
    "courseName": "B-Tech, EEE"
  }
];

/* ─── Initial Seed Ledger History ────────────────────────────── */

const initialSeedLedger: PaymentRecord[] = [];

/* ─── Initial Seed Payment Submissions ───────────────────────── */

const initialSeedSubmissions: PaymentSubmission[] = [];

/* ─── Global State Definition ────────────────────────────────── */

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

export function addTenant(tenant: Omit<Tenant, "id">): Tenant {
  if (!globalThis.__pghq_tenants) globalThis.__pghq_tenants = [];
  const newTenant: Tenant = {
    ...tenant,
    id: `ten-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
  };
  globalThis.__pghq_tenants.unshift(newTenant);
  return newTenant;
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

  // Update tenant's status to PAID if paid in full
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
