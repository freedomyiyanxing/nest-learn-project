import { Controller, Get, Post, Param } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserService } from "./user.service";
import { ConfigEnum } from "../enum/config.enum";

@Controller("user")
export class UserController {
  // https://www.typescriptlang.org/docs/handbook/2/classes.html?#parameter-properties
  // private userService: UserService 相当于 this.userService = new UserService()
  constructor(private userService: UserService, private configService: ConfigService) {}

  @Get()
  getUsers(): any {
    return this.userService.getUsers();
  }

  @Post()
  addUsers() {
    return this.userService.addUsers();
  }

  @Get("/range/:id")
  range(@Param() params: { id: string }): { code: number; data: Array<string> | null } {
    console.log(this.configService.get(ConfigEnum.DB));
    return this.userService.range(params.id);
  }
}
