export const DEFAULT_EMBEDDING_PROVIDER = 'newapi';

// Single source of truth for the Aihub default model. All packages import
// DEFAULT_MODEL / DEFAULT_MINI_MODEL / DEFAULT_ONBOARDING_MODEL from here;
// do not re-read AIHUB_DEFAULT_MODEL elsewhere.
const DEFAULT_AIHUB_MODEL = process.env.AIHUB_DEFAULT_MODEL || 'glm-5.2';

export const DEFAULT_MODEL = DEFAULT_AIHUB_MODEL;
export const DEFAULT_PROVIDER = 'newapi';
export const DEFAULT_MINI_MODEL = DEFAULT_AIHUB_MODEL;
export const DEFAULT_MINI_PROVIDER = 'newapi';

export const DEFAULT_ONBOARDING_MODEL = DEFAULT_AIHUB_MODEL;
export const DEFAULT_ONBOARDING_PROVIDER = 'newapi';
