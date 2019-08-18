export class Object {
    constructor(
        public m: Mot = null
    ) {}
}
export class Mot {
    constructor(
        public engineSize = '',
        public fuelType = '',
        public make = '',
        public model = '',
        public primaryColour = '',
        public registration = '',
        public registrationDate = '',
        public motTests: MotTests[] = []
    ) {}
}

 export class MotTests {
    constructor(
        public completedDate = '',
        public expiryDate = '',
        public motTestNumber = '',
        public odometerResultType = '',
        public odometerUnit = '',
        public odometerValue = '',
        public rfrAndComments: RfrAndComments[] = [],
        public yearTotal = 0
    ) {}
}
export class RfrAndComments {
    constructor(
        public text = '',
        public type = '',
        public dangerous = ''
    ) {}
}
export class WriteOffRecordList {
    constructor(
        public MiaftrEntryDate = '',
        public LossDate = '',
        public LossType = '',
        public Category = '',
    ) {}
}
export class FinanceRecordList {
    constructor(
        public AgreementDate = '',
        public AgreementType = '',
        public AgreementTerm = '',
        public AgreementNumber = '',
        public FinanceCompany = '',
        public ContactNumber = '',
        public VehicleDescription = ''
    ) {
    }
}
