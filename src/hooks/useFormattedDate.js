import { format, parseISO } from 'date-fns';

export default function useFormattedDate(str, outputFormat = 'yyyy-MM-dd HH:mm:ss') {
    if (str) {
        const date = format(parseISO(str), outputFormat);
        return date;
    }
}