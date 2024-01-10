class Hospital {
  protected doctor: number;
  protected patients: number;
  protected medicine: string;

  constructor(doctor: number, patients: number, medicine: string) {
    this.doctor = doctor;
    this.patients = patients;
    this.medicine = medicine;
  }

  public hospitalInfo(): string {
    return `The hospital has ${this.doctor} doctor and ${this.patients} and you should have ${this.medicine}`;
  }
}

class Surgery extends Hospital {
  constructor(
    protected surgeon: number,
    protected surgeries: number,
    doctor: number
  ) {
    super(doctor, 0, "");
  }
  public hospitalInfo(): string {
    return `There are ${this.surgeon} surgeon and ${
      this.surgeries
    } surgeries happening and ${
      this.doctor
    } doctors are helping ${super.hospitalInfo()}`;
  }

  surgeryInfo(): string {
    return `There are ${this.surgeon} surgeon performing ${
      this.surgeries
    }. ${super.hospitalInfo()}`;
  }
}

const hosp = new Hospital(22, 30, "Ibuprofin");
console.log(hosp.hospitalInfo());

const surg = new Surgery(30, 20, 23);
console.log(surg.hospitalInfo());
