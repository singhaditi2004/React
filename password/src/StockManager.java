import java.util.*;

public class StockManager {
    private static HashMap<String, Integer> map = new HashMap<>();

    public void add_stock(String stock, int quantity) {
        map.put(stock, quantity);
    }

    public boolean sell_stock(String stock, int quantity) {
        if (map.containsKey(stock) && map.get(stock) >= quantity) {
            return true;
        }
        return false;
    }

    public int get_stock_quantity(String stock) {

        if (map.containsKey(stock)) {
            return map.get(stock);
        }
        return 0;
    }

    public boolean delete_stock(String stock) {
        if (map.containsKey(stock)) {
            return true;
        }
        return false;
    }

    public void update_stock(String stock, int quantity) {
        map.put(stock, quantity);
    }

    public static void main(String[] args) {
        StockManager stock = new StockManager();
        System.out.println(stock.delete_stock("k"));
    }
}
