public class Bubble {
    public static void main(String[] args) {
        int arr[] = { 9, 5, 11, 1, 3, 2, 7 };
        countSort(arr);
        // selectionSort(arr);
        printArray(arr);
    }

    static void selectionSort(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minValueIndex = i;

            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minValueIndex]) {
                    minValueIndex = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[minValueIndex];
            arr[minValueIndex] = temp;
        }
    }

    static void countSort(int[] arr) {
        int n = arr.length;
        int max = arr[0];
        for (int i = 0; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        int[] sort = new int[max + 1];
        for (int i = 0; i < n; i++) {
            sort[arr[i]]++;
        }
        int ind = 0;
        for (int i = 0; i < max + 1; i++) {
            if (sort[i] > 0) {
                arr[ind++] = i;
            }
        }
    }

    static void printArray(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}