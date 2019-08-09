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
        public rfrAndComments: RfrAndComments[] = []
    ) {}
}
export class RfrAndComments {
    constructor(
        public text = '',
        public type = '',
        public dangerous = ''
    ) {}
}
// export class Tax {
//     constructor(
//         public cO2Emissions = '',
//         public cylinderCapacity = '',
//         public dateOfFirstRegistration = '',
//         public euroStatus = '',
//         public exportMarker = '',
//         public fuelType = '',
//         public revenueWeight = '',
//         public VehicleColour = '',
//         public vehicleMake = '',
//         public vehicleStatus = '',
//         public VehicleTypeApproval = '',
//         public wheelplan = '',
//         public yearofManufacture = '',
//         public statusBar: StatusBar = new StatusBar()
//     ) {}
// }
// export class StatusBar {
//     constructor(
//         public status = '',
//         public taxDue = ''
//     ) {}
// }
