import {
  NOTE_NOT_FOUND_ERROR,
  THE_NAME_ALREADY_EXISTS,
} from "./notes.constants";
import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  NotFoundException,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note-dto";
import { NotesService } from "./notes.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Note } from "./notes.model";

@ApiTags("Notes")
@Controller("notes")
export class NotesController {
  constructor(private notesService: NotesService) {}
  @Get("stats")
  async stats() {
    return this.notesService.stats();
  }
  @ApiOperation({ summary: "Create note" })
  @ApiResponse({ status: 200, type: Note })
  @Post()
  async create(@Body() noteDto: CreateNoteDto) {
    const candidate = await this.notesService.getNoteByName(noteDto.name);
    if (candidate) {
      throw new HttpException(THE_NAME_ALREADY_EXISTS, HttpStatus.BAD_REQUEST);
    }
    return this.notesService.create(noteDto);
  }

  @ApiOperation({ summary: "Getting all notes" })
  @ApiResponse({ status: 200, type: [Note] })
  @Get()
  async getAll() {
    return this.notesService.getAll();
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<any> {
    const deleteNote = await this.notesService.remove(id);
    if (!deleteNote) {
      throw new NotFoundException(NOTE_NOT_FOUND_ERROR);
    }
  }

  @Get(":id")
  async getOne(@Param("id") id): Promise<Note> {
    const note = await this.notesService.getById(id);
    if (!note) {
      throw new NotFoundException(NOTE_NOT_FOUND_ERROR);
    }
    return note;
  }
}
