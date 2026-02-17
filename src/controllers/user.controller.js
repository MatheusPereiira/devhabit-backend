export const getMe = (req, res) => {
  const user = req.user

  const next_level_xp = user.level * 100

  return res.json({
    name: user.name,
    level: user.level,
    current_xp: user.current_xp,
    next_level_xp,
    lives: user.lives,
    streak: user.streak_count,
    avatar: user.avatar_url
  })
}
