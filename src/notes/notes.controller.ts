import { Controller, Get } from "@nestjs/common";
import { NotesService } from "./notes.service";

@Controller("notes")
export class NotesController {
  constructor(private notesService: NotesService) {}
  @Get()
  getAll() {
    return this.notesService.getAll();
  }
}