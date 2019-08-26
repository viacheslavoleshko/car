export class Recall {
    constructor(
        public reg = '',
        public make  = '',
        public model = '',
        public manuf = '',
        public manufacturer_ref = '',
        public id = 0,
        public launch_date = '',
        public recalls_number = '',
        public recalls_model_information = '',
        public concern = '',
        public defect = '',
        public build_end = '',
        public build_start = '',
        public remedy = '',
        public vehicle_numbers = '',
        public vin_end = '',
        public vin_start = ''
    ) {
    }

}
export class RecallsForMake {
    constructor(
        public ye = 0,
        public count = 0,
        public threshold = 0
    ) {}
}
