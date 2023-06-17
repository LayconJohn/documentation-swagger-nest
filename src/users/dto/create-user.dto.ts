import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    /**
   * Utilizado para exibir dados no perfil
   * informações da pessoa conectada.
   * @example Fulano Santos
   */
    name: string;

    /**
   * Email que será utilizado para Acesso a aplicação durante login
   * informações da pessoa conectada.
   * @example Fulano Santos
   */
    email: string;

    /**
   * Informação sensível que deve ser ocultada e não compartilhada. 
   * Será utlizada no login
   * @example $FU1an0
   */
    password: string;
}
