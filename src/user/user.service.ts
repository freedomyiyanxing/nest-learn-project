import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  getUsers(): any {
    return {
      code: 200
    };
  }

  addUsers() {
    return {
      code: 200,
      data: "添加成功"
    };
  }

  range(id: string) {
    let data = null;
    if (id === "5") {
      data = Array.from({ length: 5 }).map((_, i) => String(i + 1));
    }
    return {
      code: 200,
      data: data
    };
  }
}
