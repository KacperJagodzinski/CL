
public class Main5 {

	public static void main(String[] args) {
		int a = 1;
		int b;
		System.out.println(++a);
		System.out.println(a++);
		System.out.println(a);
		b=a++;
		System.out.println(b);
		b=++a;
		System.out.println(++a);
	}

}
//Podejrzenie: 2,2,3,4,6
//Rzeczywistość: 2,2,3,3,6
/*Działanie:
++a zwieksza zmienną a o 1 przed wypisaniem wiec wypisuje 2
a++ zmniejsza po wypisaniu więc wypisuje 2
a=3 wiec wypisuje 3
a++ zwieksza po działaniu wiec wypisuje 3
b=++a zwieksza przed działaniem i ++a zwiększa przed działaniem łącznie wypisuje 6.
*/
