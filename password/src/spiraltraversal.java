import java.util.*;

public class spiraltraversal {
    public static List<Integer> traversal(int [] [] arr){
        int n=arr.length;
        int m=arr[0].length;
        int top=0,left=0,bottom=n-1,right=m-1;
        List<Integer> res=new ArrayList<>();
        while(top<=right && left<=bottom){
            for(int i=left;i<=right;i++){ // for left to right
                res.add(arr[top][i]);
            }
            top++;
            for(int i=top;i<=bottom;i++){ // for top to bottom
                res.add(arr[i][right]);
            }
            right--;
            if(top<=bottom){
            for(int i=right;i>=left;i--){ //for right to left
                res.add(arr[bottom][i]);
            }
            if(left<=right){
                for(int i=bottom;i>=top;i--){
                    res.add(arr[i][left]);
                }
            }
        }
        }
        return res;
    }
    public static void main(String[] args) {
        int [][ ] arr={{1,2,3,4},
	                 {5,6,7,8},
	                 {9,10,11,12}};
        List<Integer> list=new ArrayList<>(traversal(arr));
        for(int i=0;i<list.size();i++){
            System.out.print(" "+list.get(i));
        }             
    }
    
}
