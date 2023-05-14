using LTO.Common.Exceptions;

namespace LTO.Common
{
    public class Parser
    {
        public static void ParseData<T1, T2>(T1 from, T2 to)
        {
            if (from == null || to == null)
                throw new CommonException("Data must have values.");

            var properties = from.GetType().GetProperties();

            foreach(var property in properties)
            {
                var toProperty = to.GetType().GetProperty(property.Name);
                if(toProperty != null)
                    toProperty.SetValue(to, property.GetValue(from));
            }
        }
    }
}
