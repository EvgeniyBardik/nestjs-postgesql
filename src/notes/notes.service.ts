import { Injectable } from "@nestjs/common";
import { Note } from "./notes.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateNoteDto } from "./dto/create-note-dto";
import { UpdateNoteDto } from "./dto/update-note-dto";

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note) private notesRepository: typeof Note) {}

  async create(dto: CreateNoteDto) {
    const note = await this.notesRepository.create(dto);
    return note;
  }

  async getAll() {
    const notes = await this.notesRepository.findAll();
    return notes;
  }

  async stats() {
    return this.notesRepository.findAll();
  }
  async getNoteByName(name: string) {
    const note = await this.notesRepository.findOne({ where: { name } });
    return note;
  }
  async getById(id: string) {
    return this.notesRepository.findByPk(id);
  }

  async remove(id: string) {
    return (await this.notesRepository.findByPk(id)).$remove;
  }
  //   async update(id: string, noteDto: UpdateNoteDto): Promise<Note> {
  //     return (await this.notesRepository.findByPk(id)).update() {
  //       new: true,
  //     });
  //   }
}
