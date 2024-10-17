
export type ContactType = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    object: string;
    message: string;
    createdAt?: string;
    updatedAt?: string;
}

export type Experience = {
    id: string,
    title: string,
    company: string,
    location: string,
    startDate: string,
    endDate: string,
    description?: string,
    tasks: Task[]
}

export type Task = {
    id: string,
    description: string
}