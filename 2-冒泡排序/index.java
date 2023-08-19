import java.util.Arrays;

class Index {
    public static void main(String[] args) {
        int[] data = { 5, 14, 6, 32, 23, 4, 32, 4, 234, 4, 0, 90 };
        System.out.println("排序前：" + Arrays.toString(data));

        for (int len = data.length; len > 1; len--) {
            for (int index = 0; index <= len - 2; index++) {

                if (data[index] > data[index + 1]) {
                    int temp = data[index];
                    data[index] = data[index + 1];
                    data[index + 1] = temp;
                }

            }
        }

        System.out.println("排序后：" + Arrays.toString(data));
    }
}