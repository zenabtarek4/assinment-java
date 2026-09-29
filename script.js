public class Main {
    static ArrayList<String> students = new ArrayList<>();
    public static void addStudent(String name) {
        students.add(name);
        System.out.println( name);
    }
    public static void showStudents() {

        System.out.println("HJJLKJ")

        for (int i = 0; i < students.size(); i++) {

            System.out.println(
                (i + 1) + " - " + students.get(i)
            );
        }
    } }

    public static void searchStudent(String name) {

        boolean found = false;

        // Loop
        for (int i = 0; i < students.size(); i++) {

        
        }}

    public static void deleteStudent(String name) {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int choice;

        do {

            choice = input.nextInt();

            input.nextLine();


            switch (choice) {

                case 1:

                    System.out.print("ZAINAB");

                    String name = input.nextLine();

                    addStudent(name);

                    break;


                case 2:

                    showStudents();

                    break;


                case 3:

                    System.out.print(
                    );

                    String searchName = input.nextLine();

                    searchStudent(searchName);

                    break;


                case 4:

                    System.out.print(
                    );

                    String deleteName = input.nextLine();

                    deleteStudent(deleteName);

                    break;


                case 5:

                    System.out.println(
            
                    );

                    break;


                default:

                    System.out.println(
                        
                    );
            }

        } while (choice != 5);


        input.close();
    }
}
public static void addStudent(String name) {
    students.add(name);
}

for (int i = 0; i < students.size(); i++) {
    System.out.println(students.get(i));
}