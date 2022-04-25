import { Injectable } from "@nestjs/common";
import { Note } from "./notes.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateNoteDto } from "./dto/create-note-dto";

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note) private notesRepository: typeof Note) {}

  async createNote(dto: CreateNoteDto) {
    const note = await this.notesRepository.create(dto);
    return note;
  }

  async getAllNotes() {
    const notes = await this.notesRepository.findAll();
    return notes;
  }
}
