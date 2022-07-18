
interface SeedData {
    entries: SeedEntry[];
}


interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Ut pariatur pariatur mollit exercitation id ut fugiat.',
            status: 'pending',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'En-progreso: Amet commodo sunt velit adipisicing in excepteur. Anim nisi reprehenderit nulla est mollit minim cillum non. Aute officia ut mollit minim sunt culpa incididunt fugiat velit cupidatat. Ipsum commodo consectetur aute dolore ipsum nulla nostrud. Id exercitation laborum esse cillum eu minim reprehenderit cillum est officia cillum.',
            status: 'in-progress',
            createdAt: Date.now(),
        },
        {
            description: 'Terminado: Aliquip elit cupidatat officia cupidatat excepteur deserunt exercitation id quis.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ]
};