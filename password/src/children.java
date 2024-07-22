import java.util.Scanner;

public class children {
    public static void swap(int [] arr,int i,int j){
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    public static void bubbleSort(int n,int []arr){
        for(int i=0;i<n;i++){
            boolean flag=false;
            for(int j=i;j<n;j++){
                if(arr[i]>arr[j]){
                    swap(arr,i,j);
                    flag=true;
                }
            }
            if(!flag){
                break;
            }
        }
    }
    public static int solve(int [] size,int [] greed,int g,int s){
        int count=0,i=0;
		bubbleSort(s,size);
		bubbleSort(g,greed);
		while(i<size.length && i<greed.length){
		    if(size[i]>=greed[i]){
		        count++;
		    }
		    i++;
		}
        return count;
    }
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int g=sc.nextInt();
		int [] greed=new int [g];
		for(int i=0;i<g;i++){
		    greed[i]=sc.nextInt();
		}
		int s=sc.nextInt();
		int [] size=new int [s];
		for(int i=0;i<s;i++){
		    size[i]=sc.nextInt();
		}
	
		System.out.println(solve(size,greed,g,s));
        sc.close();
	}
    
    
}
