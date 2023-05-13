using LTO.Common.Exceptions;

namespace LTO.Common
{
    public class Parser
    {
        public static void ParseData<T1, T2>(T1 from, T2 to)
        {
            if (from == null)
                throw new CommonException("From data must have values.");

            var properties = from.GetType().GetProperties();

            foreach(var property in properties)
            {
                var value = property.GetValue(from, null);
                property.SetValue(to, value);
            }
        }
    }
}
