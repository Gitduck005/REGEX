#include <stdio.h>
#include <string.h>

void wait_for_enter(void)
{
    int ch;

    printf("Press Enter to exit...");
    fflush(stdout);

    /* Wait until the user presses Enter */
    while ((ch = getchar()) != '\n' && ch != EOF)
    {
        /* Discard characters until Enter is pressed */
    }
}

int main(void)
{
    char input[256];
    double radius;
    double area;
    const double PI = 3.14159265358979323846;

    printf("Enter the radius of the circle: ");
    fflush(stdout);

    /* Read the user's input as a whole line */
    if (fgets(input, sizeof input, stdin) == NULL)
    {
        printf("Error: could not read input.\n");
        wait_for_enter();
        return 1;
    }

    /*
       If the user entered more characters than fit in the buffer,
       discard the extra characters.
    */
    if (strchr(input, '\n') == NULL)
    {
        int ch;

        while ((ch = getchar()) != '\n' && ch != EOF)
        {
            /* Discard extra input */
        }
    }

    /* Convert the input text to a double */
    if (sscanf(input, "%lf", &radius) != 1)
    {
        printf("Error: please enter a numeric radius.\n");
        wait_for_enter();
        return 1;
    }

    /* Check that the radius is not negative */
    if (radius < 0.0)
    {
        printf("Error: radius cannot be negative.\n");
        wait_for_enter();
        return 1;
    }

    /* Calculate the area */
    area = PI * radius * radius;

    /* Send the result back to the user */
    printf("The area of the circle is: %.2f\n", area);

    /* Keep the terminal open until Enter is pressed */
    wait_for_enter();

    return 0;
}
