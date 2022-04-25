import { ApiProperty } from "@nestjs/swagger";

export class CreateNoteDto {
  @ApiProperty({ example: "Book", description: "Note name" })
  readonly name: string;

  @ApiProperty({ example: "Task", description: "Note category" })
  readonly category: string;

  @ApiProperty({ example: "Some description", description: "Note description" })
  readonly content: string;

  @ApiProperty({ example: "true", description: "Note state" })
  readonly active: boolean;

  @ApiProperty({
    example: "24 January, 2022",
    description: "Note date, (default: creation date)",
  })
  readonly date?: string;
}
