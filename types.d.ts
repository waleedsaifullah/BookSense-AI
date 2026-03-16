import { UploadSchema } from '@/lib/zod';

export interface BookCardProps {
    title: string,
    author: string,
    coverURL: string,
    slug: string
}

export type BookUploadFormValues = z.infer<typeof UploadSchema>;

export interface VoiceSelectorProps {
    disabled?: boolean;
    className?: string;
    value?: string;
    onChange: (voiceId: string) => void;
}

export interface FileUploadFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    acceptTypes: string[];
    disabled?: boolean;
    icon: LucideIcon;
    placeholder: string;
    hint: string;
}