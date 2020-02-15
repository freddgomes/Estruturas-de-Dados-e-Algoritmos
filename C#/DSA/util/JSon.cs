namespace DSA.util
{
    public class JSon
    {
        public static string ConvertToJson(object obj)
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(obj);

        }
    }
}
