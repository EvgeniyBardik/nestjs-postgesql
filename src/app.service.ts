import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  hello() {
    return "Task for Radency<hr><br>Fields of table:<br><br>name: string<br>category: string<br>content: string<br>active: boolean<br>date?: string<br><br>/notes - Create a note (POST)<br>/notes/:id - Remove note (DELETE)<br>/notes/:id - Edit note (PATCH)<br>/notes/:id - Retrieve note (GET)<br>/notes - Get all notes (GET)<br>/notes/stats - Get aggregate amount of notes (GET)";
  }
}
