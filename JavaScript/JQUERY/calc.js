$(document).ready(
    function()
    {
        $("button").click(
            function()
            {
                var f_num =$("#num1").val();
                var s_num =$("#num2").val();
                var opr = $(this).html();
                var expression = f_num + opr + s_num;
                var result = eval(expression);
                $("#result").html(result);
            }
        )
    }
)