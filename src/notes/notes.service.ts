import { Injectable } from "@nestjs/common";

@Injectable()
export class NotesService {
  getAll() {
    return [
      {
        name: "Book",
        date: "April 20, 2022",
        content: "Read new book",
        category: "Task",
        active: true,
      },
      {
        name: "Shop",
        date: "April 17, 2022",
        content: "Tea, Bread",
        category: "Task",
        active: true,
      },
    ];
  }
}
