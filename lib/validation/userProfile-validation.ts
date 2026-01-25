export const GENDER_OPTIONS = [
  'male', 'female', 'non-binary'
] as const;

export const YEAR_OPTIONS = [
  'freshman', 'sophomore', 'junior', 'senior', 'grad student'
] as const;

export const ATTRACTIVENESS_PREFERENCE_OPTIONS = [
  'cute',
  'hot',
  'casual',
  'refined',
  'golden retriever',
  'black cat',
  'light aesthetic',
  'dark aesthetic',
  'minimal',
  'expressive'
] as const;

export const ETHNICITY_OPTIONS = [
  'prefer not to answer',
  'african',
  'east asian',
  'south asian',
  'southeast asian',
  'black / african american',
  'hispanic / latinx',
  'middle eastern / north african',
  'native american / alaskan native',
  'native hawaiian / pacific islander',
  'white'
] as const;

// Stanford majors
export const STANFORD_MAJOR_OPTIONS = [
  "aeronautics and astronautics",
  "african and african american studies",
  "african studies",
  "american studies",
  "anthropology",
  "applied physics",
  "archaeology",
  "art history",
  "art practice",
  "asian american studies",
  "atmosphere / energy",
  "bioengineering",
  "biology",
  "biomechanical engineering",
  "biomedical computation",
  "chemical engineering",
  "chemistry",
  "chicana/o - latina/o studies",
  "china studies",
  "civil engineering",
  "classics",
  "communication",
  "community health and prevention research",
  "comparative literature",
  "comparative studies in race and ethnicity",
  "computer science",
  "creative writing",
  "dance (taps minor)",
  "data science",
  "data science & social systems",
  "democracy, development, and the rule of law",
  "design",
  "digital humanities",
  "earth and planetary sciences",
  "earth systems",
  "east asian studies",
  "economics",
  "education",
  "electrical engineering",
  "energy science and engineering",
  "engineering physics",
  "english",
  "environmental systems engineering",
  "ethics in society",
  "european studies",
  "feminist, gender, and sexuality studies",
  "film and media studies",
  "french",
  "geophysics",
  "german studies",
  "global studies",
  "history",
  "honors in the arts",
  "human biology",
  "human rights",
  "iberian and latin american cultures",
  "international policy studies",
  "international relations",
  "international security studies",
  "iranian studies",
  "islamic studies",
  "italian",
  "japanese",
  "jewish studies",
  "korean",
  "laboratory animal science",
  "latin american studies",
  "linguistics",
  "management science and engineering",
  "materials science and engineering",
  "mathematical and computational science",
  "mathematics",
  "mechanical engineering",
  "medieval studies",
  "middle eastern language, literature and culture",
  "modern languages",
  "modern thought and literature",
  "music",
  "music, science, and technology",
  "native american studies",
  "philosophy",
  "philosophy and religious studies",
  "physics",
  "political science",
  "portuguese",
  "psychology",
  "public policy",
  "religious studies",
  "science, technology, and society",
  "slavic languages and literatures",
  "sociology",
  "south asian studies",
  "spanish",
  "statistics",
  "sustainability",
  "sustainable architecture + engineering",
  "symbolic systems",
  "theater and performance studies",
  "translation studies",
  "urban studies"
] as const;

// Penn State majors
export const PSU_MAJOR_OPTIONS = [
  "accounting",
  "acting",
  "actuarial science",
  "administration of justice",
  "advertising/public relations",
  "aerospace engineering",
  "african american studies",
  "african and african american studies",
  "african studies",
  "agribusiness management",
  "agricultural and biorenewable systems management",
  "agricultural and extension education",
  "agricultural science",
  "american studies",
  "animal science",
  "anthropological science",
  "anthropology",
  "applied linguistics",
  "architectural engineering",
  "architecture",
  "art",
  "art education",
  "art history",
  "artificial intelligence engineering",
  "artificial intelligence methods and applications",
  "arts administration",
  "asian studies",
  "astronomy and astrophysics",
  "biobehavioral health",
  "biochemistry and molecular biology",
  "biological engineering",
  "biology",
  "biomedical engineering",
  "biotechnology",
  "business",
  "business analytics and information systems",
  "business economics",
  "chemical engineering",
  "chemistry",
  "chinese",
  "civil engineering",
  "classics and ancient mediterranean studies",
  "communication arts and sciences",
  "communication sciences and disorders",
  "communications",
  "community, environment, and development",
  "comparative literature",
  "computer engineering",
  "computer science",
  "corporate communication",
  "corporate innovation and entrepreneurship",
  "creative writing",
  "criminal justice",
  "criminology",
  "cybersecurity analytics and operations",
  "data sciences",
  "digital arts and media design",
  "digital journalism and media",
  "digital media, arts, and technology",
  "digital multimedia design",
  "earth science and policy",
  "earth sciences",
  "economics",
  "education and public policy",
  "electrical engineering",
  "electrical engineering technology",
  "electrical and computer engineering technology",
  "electro-mechanical engineering technology",
  "elementary and early childhood education",
  "elementary education",
  "energy and sustainability policy",
  "energy business and finance",
  "energy engineering",
  "engineering",
  "engineering science",
  "english",
  "enterprise technology integration",
  "environmental resource management",
  "environmental science",
  "environmental studies",
  "environmental systems engineering",
  "film production",
  "finance",
  "food science",
  "forensic science",
  "forest ecosystem management",
  "french and francophone studies",
  "functional data analytics",
  "geobiology",
  "geography",
  "geosciences",
  "german",
  "global and international studies",
  "global studies",
  "graphic design",
  "health humanities",
  "health policy and administration",
  "history",
  "hospitality management",
  "human capital management",
  "human development and family studies",
  "human-centered design and development",
  "humanities",
  "immunology and infectious disease",
  "industrial engineering",
  "information sciences and technology",
  "information systems",
  "information technology",
  "information technology ethics and compliance",
  "integrated social sciences",
  "integrative arts",
  "integrative science",
  "interdisciplinary business with engineering studies",
  "interdisciplinary science and business",
  "international business",
  "international politics",
  "italian",
  "japanese",
  "jewish studies",
  "journalism",
  "kinesiology",
  "korean",
  "labor and human resources",
  "landscape architecture",
  "landscape contracting",
  "latin american studies",
  "law and society",
  "linguistics",
  "management",
  "management information systems",
  "marketing",
  "materials science and engineering",
  "mathematical sciences",
  "mathematics",
  "mechanical engineering",
  "mechanical engineering technology",
  "media and communication",
  "media studies",
  "medieval studies",
  "meteorology and atmospheric science",
  "microbiology",
  "middle east studies",
  "middle level education",
  "mining engineering",
  "multidisciplinary studies",
  "music",
  "music education",
  "music technology",
  "musical arts",
  "musical theatre",
  "neurobiology",
  "nuclear engineering",
  "nursing",
  "nutritional sciences",
  "occupational science",
  "organizational and professional communication",
  "organizational leadership",
  "petroleum and natural gas engineering",
  "pharmacology and toxicology",
  "philosophy",
  "physics",
  "planetary science and astronomy",
  "plant sciences",
  "plastics engineering technology",
  "political science",
  "polymer engineering and science",
  "premedicine",
  "professional photography",
  "project and supply chain management",
  "psychological and social sciences",
  "psychology",
  "public policy",
  "race and ethnic studies",
  "rail transportation engineering",
  "real estate",
  "recreation, park, and tourism management",
  "rehabilitation and human services",
  "risk management",
  "russian",
  "science",
  "secondary education",
  "security and risk analysis",
  "social data analytics",
  "social work",
  "sociology",
  "software engineering",
  "spanish",
  "special education",
  "statistics",
  "strategic communications",
  "structural design and construction engineering technology",
  "supply chain and information systems",
  "surveying engineering",
  "systems neuroscience",
  "telecommunications and media industries",
  "theatre",
  "turfgrass science",
  "veterinary and biomedical sciences",
  "visual art studies",
  "wildlife and fisheries science",
  "women's, gender, and sexuality studies",
  "workforce education and development",
  "world languages education",
  "writing and digital media"
] as const;

// Berkeley majors
export const BERKELEY_MAJOR_OPTIONS = [
  // Arts & Humanities
  "ancient greek and roman studies",
  "greek",
  "latin",
  "art history",
  "art practice",
  "celtic studies",
  "comparative literature",
  "dutch studies",
  "chinese language and culture",
  "japanese language and culture",
  "korean language and culture",
  "east asian religion, thought, and culture",
  "english",
  "film and media",
  "french",
  "german",
  "italian studies",
  "middle eastern languages and culture",
  "middle eastern worlds",
  "music",
  "near eastern civilizations",
  "philosophy",
  "rhetoric",
  "danish",
  "finnish",
  "norwegian",
  "old norse",
  "swedish",
  "armenian",
  "bosnian / croatian / serbian",
  "czech",
  "hungarian",
  "polish",
  "russian",
  "south and southeast asian studies",
  "spanish and portuguese",
  "latin american languages, literature, and cultures",
  "hispanic languages, literature, and bilingualism",
  "theater and performance studies",
  "dance and performance studies",

  // Biological Sciences
  "integrative biology",
  "molecular and cell biology",
  "biochemistry and molecular biology",
  "molecular therapeutics",
  "cell and developmental biology",
  "genetics, genomics, and development",
  "immunology and pathogenesis",
  "neuroscience",
  "public health",
  "life science, business, and entrepreneurship",

  // Interdisciplinary
  "american studies",
  "interdisciplinary studies",
  "legal studies",
  "media studies",

  // Mathematical & Physical Sciences
  "analytics",
  "astrophysics",
  "chemistry",
  "earth and planetary science",
  "atmospheric science",
  "environmental earth science",
  "geology",
  "geophysics",
  "marine science",
  "planetary science",
  "applied mathematics",
  "mathematics",
  "mathematics with teaching concentration",
  "physics",

  // Social Sciences
  "african american studies",
  "anthropology",
  "asian american and asian diaspora studies",
  "chicano studies",
  "chicanx latinx studies",
  "cognitive science",
  "economics",
  "educational sciences",
  "ethnic studies",
  "gender and women's studies",
  "geography",
  "global studies",
  "asian area studies (china)",
  "asian area studies (japan)",
  "developmental studies",
  "latin american studies",
  "middle eastern studies",
  "peace and conflict studies",
  "history",
  "linguistics",
  "native american studies",
  "political economy",
  "political science",
  "psychology",
  "social welfare",
  "sociology",

  // Computing, Data Science, and Society
  "computer science",
  "data science",
  "statistics",

  // Chemistry
  "chemical biology",
  "chemical engineering",

  // Engineering
  "aerospace engineering",
  "bioengineering",
  "civil engineering",
  "electrical engineering and computer sciences",
  "environmental engineering",
  "engineering science",
  "energy engineering",
  "engineering mathematics and statistics",
  "engineering physics",
  "environmental engineering science",
  "industrial engineering and operations research",
  "materials science and engineering",
  "mechanical engineering",
  "nuclear engineering",
  "management, entrepreneurship, and technology",

  // Environmental Design
  "architecture",
  "landscape architecture",
  "sustainable environmental design",
  "urban studies",

  // Natural Resources
  "conservation and resource studies",
  "ecosystem management and forestry",
  "forestry",
  "natural resource management",
  "environmental economics and policy",
  "environmental sciences",
  "genetics and plant biology",
  "microbial biology",
  "molecular environmental biology",
  "nutrition and metabolic biology",
  "society and environment",

  // Business
  "business administration",
  "global management"
] as const;

// School email domain to major options mapping
export const SCHOOL_MAJOR_OPTIONS: Record<string, readonly string[]> = {
  'stanford.edu': STANFORD_MAJOR_OPTIONS,
  'psu.edu': PSU_MAJOR_OPTIONS,
  'berkeley.edu': BERKELEY_MAJOR_OPTIONS,
};

// Default to Stanford for backward compatibility
export const MAJOR_OPTIONS = STANFORD_MAJOR_OPTIONS;

// Utility function to get school from email domain
export function getSchoolFromEmail(email: string): string | null {
  if (!email || typeof email !== 'string') return null;
  const domain = email.split('@')[1]?.toLowerCase();
  return domain || null;
}

// Utility function to get major options for a school
export function getMajorOptionsForSchool(email: string): readonly string[] {
  const school = getSchoolFromEmail(email);
  if (school && SCHOOL_MAJOR_OPTIONS[school]) {
    return SCHOOL_MAJOR_OPTIONS[school];
  }
  // Default to Stanford if school not found
  return STANFORD_MAJOR_OPTIONS;
}

export const CHARACTER_LIMITS = {
  nameMin: 1,
  nameMax: 50,
  instagramMax: 30,
} as const;

export const IMAGE_LIMITS = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'] as const,
} as const;

export const ATTRACTIVENESS_LIMITS = {
  min: 0,
  max: 100,
} as const;

export interface UserProfileData {
  name: string;
  year: string;
  major: string;
  instagram: string;
  photo: string | null;
  gender: string;
  ethnicity: string[];
  lookingForGender: string[];
  lookingForEthnicity: string[];
  attractiveness: number;
  optInMatching: boolean;
  onboardingCompleted: boolean;
  adjectivePreferences: string[];
}

export interface ProfileImageData {
  file: File;
  isValid: boolean;
  error?: string;
}

// Validation functions
export function validateName(name: string): { isValid: boolean; error?: string } {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'all basic info must be filled' };
  }
  
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    return { isValid: false, error: 'name cannot be empty' };
  }
  
  if (trimmed.length > CHARACTER_LIMITS.nameMax) {
    return { isValid: false, error: `name cannot exceed ${CHARACTER_LIMITS.nameMax} characters` };
  }
  
  return { isValid: true };
}

export function validateYear(year: string): { isValid: boolean; error?: string } {
  if (!year) {
    return { isValid: false, error: 'all basic info must be filled' };
  }
  
  if (!YEAR_OPTIONS.includes(year as any)) {
    return { isValid: false, error: 'invalid year selection' };
  }
  
  return { isValid: true };
}

export function validateMajor(major: string, userEmail?: string): { isValid: boolean; error?: string } {
  if (!major) {
    return { isValid: false, error: 'all basic info must be filled' };
  }
  
  // If userEmail is provided, validate against school-specific majors
  if (userEmail) {
    const validMajors = getMajorOptionsForSchool(userEmail);
    if (!validMajors.includes(major as any)) {
      return { isValid: false, error: 'invalid major selection' };
    }
  } else {
    // Fallback to default validation (Stanford) if no email provided
    if (!MAJOR_OPTIONS.includes(major as any)) {
      return { isValid: false, error: 'invalid major selection' };
    }
  }
  
  return { isValid: true };
}

export function validateInstagram(instagram: string): { isValid: boolean; error?: string } {
  if (!instagram) {
    return { isValid: true }; // Instagram is optional
  }
  
  if (typeof instagram !== 'string') {
    return { isValid: false, error: 'invalid instagram username' };
  }
  
  const trimmed = instagram.trim();
  
  if (trimmed.length > CHARACTER_LIMITS.instagramMax) {
    return { isValid: false, error: `instagram username cannot exceed ${CHARACTER_LIMITS.instagramMax} characters` };
  }
  
  // Instagram username rules: letters, numbers, periods, and underscores only
  if (!/^[a-zA-Z0-9_.]+$/.test(trimmed)) {
    return { isValid: false, error: 'instagram username can only contain letters, numbers, periods, and underscores' };
  }
  
  return { isValid: true };
}

export function validateGender(gender: string): { isValid: boolean; error?: string } {
  if (!gender) {
    return { isValid: false, error: 'all basic info must be filled' };
  }
  
  if (!GENDER_OPTIONS.includes(gender as any)) {
    return { isValid: false, error: 'invalid gender selection' };
  }
  
  return { isValid: true };
}

export function validateEthnicity(ethnicity: string[]): { isValid: boolean; error?: string } {
  if (!ethnicity || !Array.isArray(ethnicity)) {
    return { isValid: false, error: 'ethnicity must be an array' };
  }
  
  if (ethnicity.length === 0) {
    return { isValid: false, error: 'at least one ethnicity must be selected' };
  }
  
  // Check if all values are valid
  for (const eth of ethnicity) {
    if (!ETHNICITY_OPTIONS.includes(eth as any)) {
      return { isValid: false, error: 'invalid ethnicity selection' };
    }
  }
  
  return { isValid: true };
}

export function validateLookingForGender(genders: string[]): { isValid: boolean; error?: string } {
  if (!genders || !Array.isArray(genders)) {
    return { isValid: false, error: 'looking for gender must be an array' };
  }
  
  // Empty array is valid (means "any gender")
  if (genders.length === 0) {
    return { isValid: true };
  }
  
  // Check if all values are valid
  for (const gender of genders) {
    if (!GENDER_OPTIONS.includes(gender as any)) {
      return { isValid: false, error: 'invalid gender preference' };
    }
  }
  
  return { isValid: true };
}

export function validateLookingForEthnicity(ethnicities: string[]): { isValid: boolean; error?: string } {
  if (!ethnicities || !Array.isArray(ethnicities)) {
    return { isValid: false, error: 'looking for ethnicity must be an array' };
  }
  
  // Empty array is valid (means "any ethnicity")
  if (ethnicities.length === 0) {
    return { isValid: true };
  }
  
  // Check if all values are valid
  for (const eth of ethnicities) {
    if (!ETHNICITY_OPTIONS.includes(eth as any)) {
      return { isValid: false, error: 'invalid ethnicity preference' };
    }
  }
  
  return { isValid: true };
}

export function validateAttractiveness(attractiveness: any): { isValid: boolean; error?: string } {
  // Check if it's a number
  if (typeof attractiveness !== 'number') {
    // Try to parse it if it's a string
    if (typeof attractiveness === 'string') {
      const parsed = parseFloat(attractiveness);
      if (isNaN(parsed)) {
        return { isValid: false, error: 'attractiveness must be a number' };
      }
      attractiveness = parsed;
    } else {
      return { isValid: false, error: 'attractiveness must be a number' };
    }
  }

  // Check if it's finite (not NaN, Infinity, or -Infinity)
  if (!isFinite(attractiveness)) {
    return { isValid: false, error: 'attractiveness must be a valid number' };
  }

  // Check range
  if (attractiveness < ATTRACTIVENESS_LIMITS.min || attractiveness > ATTRACTIVENESS_LIMITS.max) {
    return { 
      isValid: false, 
      error: `attractiveness must be between ${ATTRACTIVENESS_LIMITS.min} and ${ATTRACTIVENESS_LIMITS.max}` 
    };
  }

  return { isValid: true };
}

export function validateOptInMatching(optInMatching: any): { isValid: boolean; error?: string } {
  if (typeof optInMatching !== 'boolean') {
    // Try to convert string representations
    if (optInMatching === 'true' || optInMatching === true) {
      return { isValid: true };
    }
    if (optInMatching === 'false' || optInMatching === false) {
      return { isValid: true };
    }
    
    return { isValid: false, error: 'opt in matching must be a boolean value' };
  }

  return { isValid: true };
}

export function validateOnboardingCompleted(onboardingCompleted: any): { isValid: boolean; error?: string } {
  if (typeof onboardingCompleted !== 'boolean') {
    // Try to convert string representations
    if (onboardingCompleted === 'true' || onboardingCompleted === true) {
      return { isValid: true };
    }
    if (onboardingCompleted === 'false' || onboardingCompleted === false) {
      return { isValid: true };
    }
    
    return { isValid: false, error: 'opt in matching must be a boolean value' };
  }

  return { isValid: true };
}

export function validateAttractivenessPreferences(attractivenessPreferences: string[]): { isValid: boolean; error?: string } {
  if (!attractivenessPreferences || !Array.isArray(attractivenessPreferences)) {
    return { isValid: false, error: 'looking for ethnicity must be an array' };
  }
  
  // Empty array is valid (means "any ethnicity")
  if (attractivenessPreferences.length === 0) {
    return { isValid: true };
  }
  
  // Check if all values are valid
  for (let i = 0; i < attractivenessPreferences.length; i++) {
    if (!ATTRACTIVENESS_PREFERENCE_OPTIONS.includes(attractivenessPreferences[i] as any)) {
      return { isValid: false, error: 'invalid ethnicity preference' };
    }
    if(ATTRACTIVENESS_PREFERENCE_OPTIONS.findIndex(attractivenessPreferences[i] as any) != 2*i && 
       ATTRACTIVENESS_PREFERENCE_OPTIONS.findIndex(attractivenessPreferences[i] as any) != 2*i+1){
      return { isValid: false, error: 'invalid ethnicity preference' };
    }
  }
  
  return { isValid: true };
}

export function validateProfileImage(file: File | null): { isValid: boolean; error?: string; validFile?: File } {
  if (!file) {
    return { isValid: true }; // Image is optional
  }

  // Check if it's actually a File object
  if (!(file instanceof File)) {
    return { isValid: false, error: 'invalid file object' };
  }

  // Check file size
  if (file.size === 0) {
    return { isValid: false, error: 'image file is empty' };
  }

  if (file.size > IMAGE_LIMITS.maxSize) {
    const maxSizeMB = IMAGE_LIMITS.maxSize / (1024 * 1024);
    return { isValid: false, error: `image file must be less than ${maxSizeMB}MB` };
  }

  // Check file type
  if (!file.type) {
    return { isValid: false, error: 'unable to determine file type' };
  }

  if (!IMAGE_LIMITS.allowedTypes.includes(file.type as any)) {
    const allowedTypesString = IMAGE_LIMITS.allowedTypes
      .map(type => type.replace('image/', '').toUpperCase())
      .join(', ');
    return { isValid: false, error: `image must be one of: ${allowedTypesString}` };
  }

  // Check file name
  if (!file.name || file.name.trim() === '') {
    return { isValid: false, error: 'image file must have a valid name' };
  }

  // Check for valid file extensions
  const fileName = file.name.toLowerCase();
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const hasValidExtension = validExtensions.some(ext => fileName.endsWith(ext));
  
  if (!hasValidExtension) {
    return { isValid: false, error: 'image file must have a valid extension (.jpg, .png, .webp)' };
  }

  // Ensure MIME type matches extension
  const extension = fileName.split('.').pop();
  const expectedMimeTypes: { [key: string]: string[] } = {
    'jpg': ['image/jpeg'],
    'jpeg': ['image/jpeg'],
    'png': ['image/png'],
    'webp': ['image/webp']
  };

  if (extension && expectedMimeTypes[extension]) {
    if (!expectedMimeTypes[extension].includes(file.type)) {
      return { isValid: false, error: 'file type does not match file extension' };
    }
  }

  return { isValid: true, validFile: file };
}

export function validateProfileData(data: any, section?: string | null, userEmail?: string): { isValid: boolean; error?: string; validData?: UserProfileData } {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'invalid profile data' };
  }
  
  // If a specific section is being edited, only validate that section
  if (section) {
    switch (section) {
      case 'basic':
        const nameValidation = validateName(data.name);
        if (!nameValidation.isValid) return nameValidation;
        
        const yearValidation = validateYear(data.year);
        if (!yearValidation.isValid) return yearValidation;
        
        const majorValidation = validateMajor(data.major, userEmail);
        if (!majorValidation.isValid) return majorValidation;
        
        const genderValidation = validateGender(data.gender);
        if (!genderValidation.isValid) return genderValidation;
        
        const ethnicityValidation = validateEthnicity(data.ethnicity);
        if (!ethnicityValidation.isValid) return ethnicityValidation;
        break;
        
      case 'instagram':
        const instagramValidation = validateInstagram(data.instagram || '');
        if (!instagramValidation.isValid) return instagramValidation;
        break;
        
      case 'lookingFor':
        const lookingForGenderValidation = validateLookingForGender(data.lookingForGender || []);
        if (!lookingForGenderValidation.isValid) return lookingForGenderValidation;
        
        const lookingForEthnicityValidation = validateLookingForEthnicity(data.lookingForEthnicity || []);
        if (!lookingForEthnicityValidation.isValid) return lookingForEthnicityValidation;
        break;
        
      case 'photo':
        // Photo validation happens separately in validateProfileImage
        break;
        
      case 'optInMatching':
        // For opt-in, validate everything (handled in page.tsx before calling this)
        const optInValidation = validateOptInMatching(data.optInMatching ?? false);
        if (!optInValidation.isValid) return optInValidation;
        break;
    }
  } else {
    // Original full validation logic when no section specified
    const nameValidation = validateName(data.name);
    if (!nameValidation.isValid) return nameValidation;
    
    const yearValidation = validateYear(data.year);
    if (!yearValidation.isValid) return yearValidation;
    
    const majorValidation = validateMajor(data.major, userEmail);
    if (!majorValidation.isValid) return majorValidation;
    
    const instagramValidation = validateInstagram(data.instagram || '');
    if (!instagramValidation.isValid) return instagramValidation;
    
    const genderValidation = validateGender(data.gender);
    if (!genderValidation.isValid) return genderValidation;
    
    const ethnicityValidation = validateEthnicity(data.ethnicity);
    if (!ethnicityValidation.isValid) return ethnicityValidation;
    
    const lookingForGenderValidation = validateLookingForGender(data.lookingForGender || []);
    if (!lookingForGenderValidation.isValid) return lookingForGenderValidation;
    
    const lookingForEthnicityValidation = validateLookingForEthnicity(data.lookingForEthnicity || []);
    if (!lookingForEthnicityValidation.isValid) return lookingForEthnicityValidation;

    const attractivenessValidation = validateAttractiveness(data.attractiveness ?? 0);
    if (!attractivenessValidation.isValid) return attractivenessValidation;

    const optInMatchingValidation = validateOptInMatching(data.optInMatching ?? false);
    if (!optInMatchingValidation.isValid) return optInMatchingValidation;
  }
  
  const validData: UserProfileData = {
    name: data.name.trim(),
    year: data.year,
    major: data.major,
    instagram: data.instagram?.trim() || '',
    photo: data.photo || null,
    gender: data.gender,
    ethnicity: data.ethnicity,
    lookingForGender: data.lookingForGender || [],
    lookingForEthnicity: data.lookingForEthnicity || [],
    attractiveness: typeof data.attractiveness === 'string' ? parseFloat(data.attractiveness) : (data.attractiveness || 0),
    optInMatching: data.optInMatching === 'true' || data.optInMatching === true,
    onboardingCompleted: data.onboardingCompleted === 'true' || data.onboardingCompleted === true,
    adjectivePreferences: data.adjectivePreferences || []
  };
  
  return { isValid: true, validData };
}

export function validateProfileDataWithImage(
  data: any, 
  imageFile?: File | null,
  section?: string | null,
  userEmail?: string
): { 
  isValid: boolean; 
  error?: string; 
  validData?: UserProfileData;
  validImage?: File;
} {
  // First validate the profile data with section awareness
  const profileValidation = validateProfileData(data, section, userEmail);
  if (!profileValidation.isValid) {
    return profileValidation;
  }

  // Then validate the image if provided and we're editing the photo section
  if (imageFile && (section === 'photo' || !section)) {
    const imageValidation = validateProfileImage(imageFile);
    if (!imageValidation.isValid) {
      return { isValid: false, error: imageValidation.error };
    }

    return {
      isValid: true,
      validData: profileValidation.validData,
      validImage: imageValidation.validFile
    };
  }

  return {
    isValid: true,
    validData: profileValidation.validData
  };
}

// Helper function to get human-readable file size
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}