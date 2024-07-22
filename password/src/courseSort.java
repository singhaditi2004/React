import java.util.*;
public class courseSort{
    public static int schedule(int [] [] array){
        Arrays.sort(array,(a,b)->a[1]-b[1]);  
        int total=0;
        PriorityQueue<Integer> queue= new PriorityQueue<Integer>(Collections.reverseOrder());
        for(int [] ele:array){
            total+=ele[0];
            queue.add(ele[0]);
            if(total>ele[1]){
                
                int temp=queue.poll();
                total=total-temp;
                
            }
        }
        return queue.size();
    }
    public static void main(String [] args){
        int [] [] course={ {100,200}
                          ,{200,1300}
                          ,{1000,1250}
                          ,{2000,3200}};
        
       int total_course=schedule(course);
       System.out.println();
     System.out.println(total_course);
    }
}
