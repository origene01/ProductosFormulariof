export interface ActorDTO{
    id: number;
    nombre: string;
    fechaNacimiento: Date;
    foto: string;
    biografia: string;
}

interface ActorCreacionDTO{
    nombre: string;
    fechaNacimiento: Date;
    foto: File;
    biografia: string;
}

