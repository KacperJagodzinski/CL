
public class Main13 {

    public static void main(String[] args) {
	int points=39;
	if(points<0){
	System.out.println("Liczba punktów mniejsza niż 0");		
	}else if(points>100){
	System.out.println("Liczba punktów większa niż 100");	
	}else if(points>=0 && points<=39){
	System.out.println("Ocena niedostateczna");	
	}else if(points>=40 && points<=54){
	System.out.println("Ocena dopuszczająca");
	}else if(points>=55 && points<=69){
	System.out.println("Ocena dostateczna");
	}else if(points>=70 && points<=84){
	System.out.println("Ocena dobra");
	}else if(points>=85 && points<=98){
	System.out.println("Ocena bardzo dobra");
	}else{
	System.out.println("Ocena celująca");	
	}

    }

}
