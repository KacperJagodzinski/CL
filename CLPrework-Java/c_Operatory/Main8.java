
public class Main8 {

	public static void main(String[] args) {
		int black=16;
		int white=15;
		boolean blackOrWhite=black<white; 
		boolean good=true; 
		boolean bad=false; 
		boolean goodOrBad=good||bad;
		boolean comparision=blackOrWhite&&goodOrBad;
		System.out.println(blackOrWhite);
		System.out.println(goodOrBad);
		System.out.println(comparision);

	}

}
/*
false,true,false
16<15 false
true or false = true
true and false = false 
*/
