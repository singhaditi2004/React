import java.util.*;

 class Student{
        String name;
        List<String> course=new ArrayList<>();
        String age,id;
        public Student(String name,String id,List<String> course){
            this.name=name;
            this.id=id;
            this.course=course;
        }
        
    }
    
    public class Student_Managment_System{
        List<String> students_Name=new ArrayList<>();
        HashMap<String,Student> data=new HashMap<>();
        public void add_student(String name,String id,List<String> courses){
            Student stud=new Student(name,id,courses);
            students_Name.add(name);
            data.put(name,stud);
        }

        public List<String> get_details(String name){
            List<String> details=new ArrayList<>();
            Student stud=data.get(name);
            if(data.containsKey(name)){
                details.add("Name : "+stud.name);
                details.add("id : "+stud.id);
                details.add("Course : "+stud.course);
                return details;
            }
            details.add("empty");
            return details;
        }
        
        public List<String> search_name(String name,String key){
            List<String> search_result=new ArrayList<>();
            List<String> names=new ArrayList<>(data.keySet());
            for(int i=0;i<names.size();i++){
                if(search(names.get(i),key)){
                    search_result.add(names.get(i));
                }
            }
            return search_result;
        }
        public boolean search(String name,String key){
              String namec=name.toLowerCase();
              String keyc=key.toLowerCase();
              if(namec.contains(keyc)){
                return true;
              }
            return false;
        }

        public static void main(String[] args) {
            Student_Managment_System stud1=new Student_Managment_System();
            
            while(true){
            System.out.println("Operations you can perform");
            System.out.printf("Add student \n Search name\n Get Details\n");
            Scanner sc=new Scanner(System.in);
            String operation=sc.next();
            switch (operation) {
                case "Add student":
                    List<String> course=new ArrayList<>();
                    System.out.println("Enter name");
                    String name=sc.next();
                    System.out.println("Enter id");
                    String id=sc.next();
                    System.out.println("Enter no of courses");
                    int n=sc.nextInt();
                    System.out.println(" Enter courses name  ");
                    for(int i=0;i<n;i++){
                        String k=sc.next();
                        course.add(k);
                    }
                    stud1.add_student(name, id, course);
                    break;
                case "Search name":
                    System.out.println("Enter name");
                    String name1=sc.next();
                    System.out.println("Enter pattern");
                    String key=sc.next();
                    stud1.search_name(name1,key);
                    break;
                case "Get Details":
                    System.out.println("Enter name");
                    String key1=sc.next();   
                    stud1.get_details(key1);    
                default:
                    sc.close();
                    break;
            }
            }
            
        }
}
/*

public class Main
{
	public static void main(String[] args) {
	  int [][ ] arr={{1,2,3,4},
	                 {5,6,7,8},
	                 {9,10,11,12}};
      for(int i=0;i<arr.length;i++){
          for(int j=0;j<arr[0].length;j++){
              System.out.print(arr[i][j]+" ");
          }
          System.out.println();
      }	                 
	}
}
spiral  */