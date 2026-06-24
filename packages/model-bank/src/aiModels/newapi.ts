import { DEFAULT_MODEL } from '@lobechat/business-const';

import type { AIChatModelCard } from '../types/aiModel';

// Aihub router provider - company deployments fetch the final model list dynamically.
// Keep one enabled chat fallback so default agents have a valid Aihub landing model before sync.
// The fallback id/displayName follow the single-source DEFAULT_MODEL (AIHUB_DEFAULT_MODEL env).
const newapiChatModels: AIChatModelCard[] = [
  {
    abilities: { functionCall: true, reasoning: true, search: true },
    contextWindowTokens: 200_000,
    displayName: DEFAULT_MODEL.toUpperCase(),
    enabled: true,
    id: DEFAULT_MODEL,
    type: 'chat',
  },
];

export const allModels = [...newapiChatModels];

export default allModels;
