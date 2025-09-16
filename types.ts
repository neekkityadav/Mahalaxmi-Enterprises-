export interface ApplicationData {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  address: string;
  policeStation: string;
  documents: {
    identityProof: File | null;
    pancard: File | null;
    addressProof: File | null;
    dobProof: File | null;
    photo: File | null;
    signature: File | null;
    purposeSpecificDoc: File | null;
  };
  submissionDate: string;
  upiTransactionId: string;
}

export const POLICE_STATIONS = [
  'Khadki',
  'Shivajinagar',
  'Yerwada',
  'Kothrud',
  'Hadapsar',
  'Warje',
  'Koregaon Park',
  'Deccan Gymkhana',
  'Swargate',
  'Bund Garden',
  'Pimpri',
  'Chinchwad',
  'Hinjawadi',
  'Wakad',
  'Nigdi',
  'Alandi',
  'Bhosari',
  'Sangvi',
  'Chaturshringi',
  'Faraskhana',
  'Vishrambaug',
  'Lashkar',
  'Kondhwa',
  'Bibwewadi',
  'Sahakar Nagar'
];