import { nextLevelXP } from '../utils/level.util.js'

export function getUserProfile(user) {
  return {
    name: user.name,
    level: user.level,
    current_xp: user.current_xp,
    next_level_xp: nextLevelXP(user.level),
    lives: user.lives,
    streak: user.streak_count,
    avatar: user.avatar_url
  }
}
