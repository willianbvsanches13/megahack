export interface UserToken {
  id: string,
  email: string,
  name: string,
}

declare global {
  namespace Express {
    export interface Request {
      user: UserToken,
    }

    namespace Multer {
      interface File {
        key?: string,
      }
    }
  }
}
