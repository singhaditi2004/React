import java.util.*;
public class pythagorean
{
    public static boolean isPythagorean(int n,int [] arr){  // brute force
        for(int i=0;i<n;i++){
            for(int j=i;j<n;j++){
                for(int k=0;k<n;k++){
                    double a=Math.pow(arr[i],2),b=Math.pow(arr[j],2),c=Math.pow(arr[k],2);
                    if(i!=j && j!=k && (a+b==c)){
                        return true;
                    }
                }
            }
        }
        return false;
    }
   /* public static boolean isPythagorean(int n,int [] arr){
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<n;i++){
            arr[i]=arr[i]*arr[i];
            map.put(arr[i],map.getOrDefault(arr[i],0)+1);
        }
  
            for(int i=0;i<n;i++){
                for(int j=0;j<n;j++){
                    if(i!=j && map.containsKey(arr[i]-arr[j]))
                    {
                        return true;
                    }
                }
            }
        
        return false;
    }*/
    public static void main(String[] args) {
    	Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int [] arr=new int [n];
		for(int i=0;i<n;i++){
		    arr[i]=sc.nextInt();
		}
		System.out.println(isPythagorean(n,arr));
        sc.close();
}
}