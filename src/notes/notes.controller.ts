import { Body, Controller, Post, Get } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note-dto";
import { NotesService } from "./notes.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Note } from "./notes.model";

@ApiTags("Notes")
@Controller("notes")
export class NotesController {
  constructor(private notesService: NotesService) {}
  @ApiOperation({ summary: "Create note" })
  @ApiResponse({ status: 200, type: Note })
  @Post()
  create(@Body() noteDto: CreateNoteDto) {
    return this.notesService.createNote(noteDto);
  }
  @ApiOperation({ summary: "Getting all notes" })
  @ApiResponse({ status: 200, type: [Note] })
  @Get()
  getAll() {
    return this.notesService.getAllNotes();
  }
}
