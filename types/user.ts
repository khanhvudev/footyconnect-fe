export type UserDto = {
  id: string;
  email: string;
  userRole: UserRole;
  name?: string | null;
  preferredLocation?: string | null;
  skillLevel?: SkillLevel | null;
};

export type UserLoginDto = {
  user: UserDto;
  accessToken: string;
};

export enum UserRole {
  NormalUser,
  Admin,
}

export enum SkillLevel {
  Beginner,
  Intermediate,
  Advanced,
}
