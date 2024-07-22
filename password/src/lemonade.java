import java.util.*;

public class lemonade {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        boolean flag = true;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {

            if (arr[i] == 5) {
                map.put(5, map.getOrDefault(arr[i], 0) + 1);
            }
            if (arr[i] == 10) {
                if (map.get(5) > 0) {
                    map.put(5, map.getOrDefault(5, 0) - 1);
                } else {
                    flag = false;
                    break;
                }
            }
            if (arr[i] == 20 && map.containsKey(10) && map.containsKey(5)) {

                if (map.get(5) >= 3 || map.get(5) >= 1 && map.get(5) >= 1) {
                    if (map.get(5) >= 3) {
                        map.put(5, map.getOrDefault(5, 0) - 3);
                    } else if (map.get(10) >= 1 && map.get(5) >= 1) {
                        map.put(5, map.getOrDefault(5, 0) - 1);
                        map.put(10, map.getOrDefault(10, 0) - 1);
                    } else {
                        flag = false;
                        break;
                    }
                }
            }

        }
        if (flag) {
            System.out.println("TRUE");
        } else {
            System.out.println("FALSE");
        }
        sc.close();
    }
}
